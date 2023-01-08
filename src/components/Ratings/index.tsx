import { useToast } from "@/hooks/toast";
import { addRate, getRatings, IRate } from "@/services/ratings";
import { useCallback, useEffect, useState } from "react";
import Stars from "../Stars";
import { Container, AddContainer, Waiting, Approved } from "./styles";

type RatingsProps = {
  recipeId: string;
};

export function Ratings({ recipeId }: RatingsProps) {
  const [rate, setRate] = useState(10);
  const [name, setName] = useState("");
  const [commentary, setCommentary] = useState("");
  const [waiting, setWaiting] = useState<IRate[]>([]);
  const [approved, setApproved] = useState<IRate[]>([]);
  const [disable, setDisable] = useState(false);

  const { addToast } = useToast();

  useEffect(() => {
    getRatings(recipeId).then((result) => {
      setApproved(result.data);
    });
  }, []);

  const handleSubmit = useCallback(() => {
    setDisable(true);
    addRate({
      rate,
      name,
      comment: commentary,
      recipeId,
    })
      .then((result) => {
        const { data } = result;
        const newComment: IRate = {
          id: data.id,
          rate: data.rate,
          name: data.name,
          comment: data.comment,
          active: data.active,
        };
        setWaiting([...waiting, newComment]);

        setRate(10);
        setName("");
        setCommentary("");

        addToast({
          title: "Sucesso",
          type: "success",
          description:
            "Sua avaliação foi enviada com sucesso, aguarde aprovação, obrigado",
        });
      })
      .catch(() => {
        addToast({
          title: "Erro",
          type: "error",
          description: "Falha ao adicionar comentário.",
        });
      })
      .finally(() => {
        setDisable(false);
      });
  }, [rate, name, commentary, waiting, setWaiting]);

  return (
    <Container>
      <AddContainer>
        <h2>Comentários</h2>
        <label htmlFor="rate">Sua Avaliação</label>
        <select
          id="rate"
          name="rate"
          value={rate}
          onChange={(e) => setRate(+e.target.value)}
        >
          <option value={2}>Nota 2</option>
          <option value={4}>Nota 4</option>
          <option value={6}>Nota 6</option>
          <option value={8}>Nota 8</option>
          <option value={10}>Nota 10</option>
        </select>
        <label htmlFor="name">Seu Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="commentary">Seu Comentário</label>
        <textarea
          id="commentary"
          name="commentary"
          value={commentary}
          onChange={(e) => setCommentary(e.target.value)}
        />
        <button type="button" onClick={handleSubmit} disabled={disable}>
          Enviar
        </button>
      </AddContainer>

      {waiting.length > 0 &&
        waiting.map((comment) => (
          <Waiting>
            <h3>Aguardando aprovação</h3>
            <div>
              <div>
                <Stars rate={+comment.rate} />
              </div>
              {comment.name && <div>{comment.name}</div>}
              {comment.comment && <div>{comment.comment}</div>}
            </div>
          </Waiting>
        ))}

      {approved.length > 0 &&
        approved.map((comment) => {
          if (comment.name || comment.comment) {
            return (
              <Approved>
                <div>
                  <div>
                    <Stars rate={+comment.rate} />
                  </div>
                  {comment.name && <div>{comment.name}</div>}
                  {comment.comment && <div>{comment.comment}</div>}
                </div>
              </Approved>
            );
          }
        })}
    </Container>
  );
}

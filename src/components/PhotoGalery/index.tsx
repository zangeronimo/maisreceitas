import { useEffect, useState } from 'react';
import { Container, Photo, Thumbs, Thumb } from './styles';

export interface IPhoto {
  id: string;
  url: string;
}

interface IPhotoGalery {
  galery: IPhoto[];
  recipe: string;
}

export default function PhotoGalery({ galery, recipe }: IPhotoGalery) {
  if (!galery) {
    return null
  }

  const [currentPhoto, setCurrentPhoto] = useState<IPhoto>({} as IPhoto);

  useEffect(() => {
    setCurrentPhoto(galery[0]);
  }, [galery]);

  return (
    <Container>
      <Photo src={currentPhoto.url} alt={recipe} />
      <Thumbs>
        {galery.filter(p => p.id !== currentPhoto.id).map(photo => (
          <Thumb
            key={photo.id}
            onClick={() => setCurrentPhoto(photo)}
            src={photo.url} alt={recipe} />
        ))}
      </Thumbs>
    </Container>
  );
}

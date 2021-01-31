import { apiURL } from '@/services/api';
import { useEffect, useState } from 'react';
import Adsense300x100 from '../Adsense300x100';
import { Container, Photo, Thumbs, Thumb } from './styles';

export interface IPhoto {
  codigo: number;
  nome: string;
  url: string;
}

interface IPhotoGalery {
  galery: IPhoto[];
}

export default function PhotoGalery({ galery }: IPhotoGalery) {
  if (!galery) {
    return null
  }

  const [currentPhoto, setCurrentPhoto] = useState<IPhoto>({} as IPhoto);

  useEffect(() => {
    setCurrentPhoto(galery[0]);
  }, [galery]);

  return (
    <Container>
      <Adsense300x100 />
      <Photo src={`${apiURL}/${currentPhoto.url}`} alt={currentPhoto.nome} />
      <Thumbs>
        {galery.filter(p => p.codigo !== currentPhoto.codigo).map(photo => (
          <Thumb
            key={photo.codigo}
            onClick={() => setCurrentPhoto(photo)}
            src={`${apiURL}/${photo.url}`} alt={photo.nome} />
        ))}
      </Thumbs>
    </Container>
  );
}

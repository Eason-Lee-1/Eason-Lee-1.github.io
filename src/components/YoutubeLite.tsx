import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


type Props = {

  id: string;
  title: string;
  borderColor: string;
};

export default function YouTubeLite({  id, title, borderColor }: Props) {
  return (
    <div className= {`rounded-xl overflow-hidden border-${borderColor} border-2`}>
      <LiteYouTubeEmbed enableJsApi={true} id={id} title={title} lazyLoad={true} poster="maxresdefault" webp={true}/>
    </div>
  );
}

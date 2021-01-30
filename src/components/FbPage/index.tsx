import { FacebookProvider, Page } from 'react-facebook';

interface FbPageProps {
  hideCover?: boolean,
  height?: number | string,
  width?: number | string,
  showFacepile?: boolean,
  hideCTA?: boolean,
  smallHeader?: boolean,
  style?: Object,
  adaptContainerWidth?: boolean,
};

export default function FbPage(props: FbPageProps) {
  return (
    <FacebookProvider appId="1374793495897967">
      <Page
        href="https://www.facebook.com/maisreceitas.com.br"
        tabs="timeline"
        hideCover={props.hideCover}
        height={props.height}
        width={props.width}
        showFacepile={props.showFacepile}
        hideCTA={props.hideCTA}
        smallHeader={props.smallHeader}
        adaptContainerWidth={props.adaptContainerWidth}
        style={props.style}
      />
    </FacebookProvider>
  );
}

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function InclineAnimation(): JSX.Element {
    return (
       <DotLottieReact
      src="/animations/incline-animation.lottie"
      loop
      autoplay
      style={{ width: 200, height: 200 }}
    />
    );
}

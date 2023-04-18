import React from 'react';
import './congrats.css';

const Congrats = () => {
  return (
    <div class="card">
	<div class="ilustration">
		<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_LrcfNr.json" background="white" speed="1" loop autoplay></lottie-player>
	</div>
	<h3>¡Congratulations!</h3>
	<p>Lorem ipsum dolor sit amet consectetur adipiscing elit ligula fusce urna nisl, quam conubia nam sapien id penatibus.</p>
	<button>Continue</button>
</div>
  )
}

export default Congrats
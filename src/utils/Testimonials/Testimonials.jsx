import React from 'react';
import './testimonials.css';

const Testimonials = () => {
    return (
        <>
            <main class="l-card">
	<section class="l-card__text">
		<p>
			This is a comment card appearing above a dotted background, and that's really cool!
		</p>
	</section>
	<section class="l-card__user">
		<div class="l-card__userImage">
			<img src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto">
		</div>
		<div class="l-card__userInfo">
			<span>Naruto Uzumaki</span>
			<span>Seventh Hokage</span>
		</div>
	</section>
</main>
        </>
    )
}

export default Testimonials

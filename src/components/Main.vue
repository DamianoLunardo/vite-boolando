<script>
export default {
  data() {
    return {
      title: 'Main'
    }
  }
}
</script>

<template>
    

    <div class="section">
				<div class="container">
					<div class="row">
						<div class="col-4">
							<div class="card">
								<figure class="card__image ">
									<img class="image1" src="/img/1.webp" alt="img1">
                                    <img class="image2" src="/img/1b.webp">
                                    <span class="heart-icon rectangle square">&hearts;</span>
                                    <div class="text">
                                        <span class="discount rectangle-red">- 30%</span>
                                        <span class="sustainability rectangle-green">Sostenibilità</span>   
                                    </div>
                                    
								</figure>
                                Levi's
                                <h6>RELAXED FIT TEE UNISEX</h6>
                                <span class="red-cost">14,99 &euro;</span> <del>29,99 &euro;</del>
							</div>
						</div>
						<div class="col-4">
							<div class="card">
								<figure class="card__image">
									<img class="image1" src="/img/2.webp" alt="img2" />
                                    <img class="image2" src="/img/2b.webp">
                                    <div class="text"></div>
									<span class="heart-icon square">&hearts;</span>
                                    <div class="text">
                                     <span class="discount rectangle-red">- 30%</span>   
                                    </div>
                                    
								</figure>
                                Guess
                                <h6>ROSES TEE</h6>
                                <span class="red-cost">20,99 &euro;</span> <del>29,99 &euro;</del>
							</div>
						</div>
						<div class="col-4">
							<div class="card">
								<figure class="card__image">
									<img class="image1" src="/img/3.webp" alt="img3" />
                                    <img class="image2" src="/img/3b.webp">
									<span class="heart-icon square">&hearts;</span>
                                    <div class="text">
                                     <span class="discount rectangle-red">- 30%</span>   
                                    </div>
                                    
								</figure>
                                Come Zucchero Filato
                                <h6>VOGLIA DI COLORI PASTELLO</h6>
                                <span class="red-cost">129,99 &euro;</span> <del>184,99 &euro;</del>
							</div>
						</div>
						<div class="col-4">
							<div class="card">
								<figure class="card__image">
									<img class="image1" src="/img/4.webp" alt="img4" />
                                    <img class="image2" src="/img/4b.webp">
									<span class="heart-icon square">&hearts;</span>
                                    <div class="text">
                                     <span class="discount rectangle-red">- 50%</span>
                                    <span class="sustainability rectangle-green">Sostenibilità</span>   
                                    </div>
                                    
								</figure>
                                Levi's
                                <h6>TEE UNISEX</h6>
                                <span class="red-cost">14,99 &euro;</span> <del>29,99 &euro;</del>
							</div>
						</div>
						<div class="col-4">
							<div class="card">
								<figure class="card__image">
									<img class="image1" src="/img/5.webp" alt="img5" />
                                    <img class="image2" src="/img/5b.webp">
									<span class="heart-icon square">&hearts;</span>
                                </figure>
                                Maya Deluxe
                                <h6>STRIPE BODICE</h6>
                                <span class="red-cost">99,99 &euro;</span>
							</div>
						</div>
						<div class="col-4">
							<div class="card">
								<figure class="card__image">
									<img class="image1" src="/img/6.webp" alt="img6" />
                                    <img class="image2" src="/img/6b.webp">
									<span class="heart-icon square">&hearts;</span>
                                    <span class="sustainability1 rectangle-green">Sostenibilità</span>
								</figure>
                                Espirit
                                <h6>MAGLIONE - BLACK</h6>
                                <span class="red-cost">29,99&euro;</span>
							</div>
						</div>
					</div>
				</div>
			</div>

</template>

<style lang="scss" scoped>
img {
	max-width: 100%;
}

figure > img {
	display: block;
	width: 100%;
}

.heart {
    width: 30px;
    height: 30px;
}

.person {
    width: 30px;
    height: 30px;
}

.red-cost {
    color: red;
}
.card__image {
	position: relative;
}
.heart-icon {
	position: absolute;
	top:4%;
	right:3%;
	display: block;
	text-align: center;
	font-size: 25px;
	color: rgb(0, 0, 0);
}
.square {
    background-color: white;
    width: 40px;
    height: 33px;
}.text {
	position: absolute;
	bottom:10%;
}

.discount {
	z-index: 2;
    display: inline-block;
	top:85%;
	left:0%;
	text-align: center;
	font-size: 15px;
	color: rgb(255, 255, 255);
}

.rectangle-red {
    width: 50px;
    height: 20px;
    background-color: red;
}

.sustainability {
	z-index: 1;
    top:85%;
	right:42%;
	display: inline-block;
	text-align: center;
	font-size: 15px;
	color: rgb(255, 255, 255);
}

.rectangle-green {
	width: 100px;
    height: 20px;
    background-color: green;
}
.sustainability1 {
    position: absolute;
	top:85%;
	display: block;
	text-align: center;
	font-size: 15px;
	color: rgb(255, 255, 255);
}
.image1 {
    position: relative;
}
.image2 {
    position: absolute;
    bottom: 0px;
    opacity: 0;
    transition: all 0.7s ease;
}
.image2:hover {
    opacity: 1;
}
</style>
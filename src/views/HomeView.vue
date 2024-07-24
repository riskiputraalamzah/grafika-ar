<template>
  <div>
    <!-- body start -->
    <div class="home-banner">
      <div class="container">
        <div id="layerslider"></div>
      </div>
      <a
        data-fancybox
        data-src="#buynow-content"
        href="https://www.indomie.com/javascript:;"
        class="home-buynow"
      ></a>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#D53939"
        fill-opacity="1"
        d="M0,160L60,149.3C120,139,240,117,360,101.3C480,85,600,75,720,106.7C840,139,960,213,1080,224C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
    <div class="home-product animatedParent animateOnce" data-sequence="200">
      <h1 class="f-car-64 animated fadeInDown slow" data-id="1">My Products</h1>
      <div class="container">
        <router-link
          to="/tutorial"
          data-id="2"
          class="btn-solid-red animated fadeInUp slow"
          >Instruksi Memasak</router-link
        >

        <div
          class="home-product-slick animated fadeInUp slow col-2"
          data-id="3"
        >
          <div>
            <a href="https://www.indomie.com/product/dry-based-noodles"
              ><img
                src="https://www.indomie.com/uploads/product/indomie-mi-goreng-special_detail_094906814.png"
                alt="Indomie Mi Goreng"
              />
              <h1 class="f-helb-30">Indomie Mi Goreng</h1></a
            >
          </div>
          <div>
            <a href="https://www.indomie.com/product/soup-based-noodles"
              ><img
                src="https://www.indomie.com/uploads/product/indomie-mi-goreng-rendang-flavour_detail_114846026.png"
                alt="Indomie Chicken Flavour "
              />
              <h1 class="f-helb-30">Indomie Goreng Rendang Flavour</h1></a
            >
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <!-- footer start -->
  </div>
</template>
<style scoped>
#layerslider {
  width: 100%;
  height: 100vmin;
  margin: 0 auto;
  background-image: url("/img/hero-content.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>

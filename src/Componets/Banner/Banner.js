import React from 'react';

const Banner = () => {
    return (
        <div style={{margin: '0 auto'}} class="carousel w-4/5">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/emthemes/resized/frontend/emthemes/slideshow/b/i/big_banner_2_.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/emthemes/resized/frontend/emthemes/slideshow/b/i/big_banner.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/emthemes/resized/frontend/emthemes/slideshow/g/a/gadgets_special_copy_big_banner.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/emthemes/resized/frontend/emthemes/slideshow/x/i/xiaomi_smartphone_deals_big_banner.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;
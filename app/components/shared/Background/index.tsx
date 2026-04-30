import React from "react";

const Background = () => {
  return (
    <div className="fixed min-h-screen w-screen inset-0 -z-10 bg-[#008087] overflow-hidden">

      {/* 1. Lingkaran biru - kiri atas */}
      <div
        className="absolute rounded-full bg-[#195B94]
        w-[clamp(160px,max(30vw,30vh),600px)] 
        h-[clamp(160px,max(30vw,30vh),600px)]
        -top-[clamp(20px,max(5vw,5vh),80px)] 
        -left-[clamp(20px,max(5vw,5vh),80px)]"
      />

      {/* 2. Lingkaran merah - kanan atas */}
      <div
        className="absolute rounded-full bg-[#f15b5b]
        w-[clamp(140px,max(28vw,28vh),560px)] 
        h-[clamp(140px,max(28vw,28vh),560px)]
        -top-[clamp(0,max(4vw,4vh),70px)] 
        -right-[clamp(50px,max(5vw,5vh),80px)]"
      />

      {/* 3. Elips merah besar - bawah tengah */}
      <div
        className="absolute rounded-[50%] bg-[#f15b5b]
        w-[clamp(600px,max(80vw,80vh),1400px)] 
        h-[clamp(300px,max(45vw,45vh),800px)]
        -bottom-[clamp(200px,max(15vw,15vh),250px)] 
        left-1/2 -translate-x-1/2"
      />

      {/* 4. Lingkaran kuning kanan */}
      <div
        className="absolute rounded-full
        bg-[linear-gradient(0deg,#FCB400_0%,#F2FF00_100%)]
        w-[clamp(150px,max(25vw,25vh),450px)] 
        h-[clamp(150px,max(25vw,25vh),450px)]
        bottom-[10%] 
        -right-[clamp(20px,max(5vw,5vh),100px)] 
        opacity-90"
      />

      {/* 5. Lingkaran kuning kiri bawah */}
      <div
        className="absolute rounded-full
        bg-[linear-gradient(0deg,#FCB400_0%,#F2FF00_100%)]
        w-[clamp(100px,max(18vw,18vh),360px)] 
        h-[clamp(100px,max(18vw,18vh),360px)]
        -bottom-[clamp(10px,max(4vw,4vh),50px)] 
        -left-[clamp(5px,max(2vw,2vh),50px)]"
      />

      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[120px]" />

    </div>
  );
};

export default Background;
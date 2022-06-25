/* eslint-disable linebreak-style */
class FounderAboutus extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .founder-about{
                display:grid;
                grid-template-columns: 1fr ;
                width:100%;
                margin: 0 auto 70px;
                box-shadow: 0 4px 8px 0 rgba(2, 56, 36, 0.2);
                gap: 20px;
                padding: 50px 0;
            }

            .founder-about .founder{
                width:80%;
                margin: 0 auto;
                padding:10px;
                display: flex;
                flex-direction:column;
                align-items: center;
                box-sizing:border-box;
                text-align:center;
                gap: 25px;
            }

            .founder .img-founder{              
                list-style: none;
                display: flex;
                justify-content: center;
                padding: 0;
                width: 100%;
                gap:10px;
                align-items: center;
                margin: 0;
            }

            .img-item {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .img-item > p {
                margin-bottom: 0;
            }

            .founder h2 {
                font-size: 23px;
                font-weight: 500;
                margin: 0;
            }

            .founder-about .founder h4{
                color:#005555;
                font-size: 15px;
                line-height: 1.7;
            }

            .founder-about .founder img{
                width: 100%;
                box-sizing:border-box;
                border-radius: 50%;
            }

            .founder-about .about{
                width: 80%;
                padding: 10px;
                box-sizing: border-box;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 10px;
             }

            .founder-about .about h2{
                font-size: 23px;
                font-weight: 500;
                margin-bottom: 0;
                text-align: center;
             }

            .founder-about .about p{
                font-size: 15px;
                text-align: justify;
                margin-bottom: 0;
                line-height: 1.7;
            }

            @media screen and (min-width: 550px) {
                .founder .img-founder {
                    width: 80%;
                }
            }

            @media screen and (min-width: 900px){
                .founder-about .founder {
                    width: 50%;
                }

                .founder-about {
                    display:flex;          
                }

                .founder-about .about {
                    width:50%;
                }

                .founder .img-founder {
                    display:flex;
                    justify-content: center;
                }

                .founder-about {
                    padding: 50px 70px;
                }
             }
        </style>
        

        <div class="founder-about">
            <div class="founder">
             <h2>Founder Pelipur</h2>
                    <ul>
                        <li data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true">
                            <img src = "./images/yoga2-small.png" alt="Yoga">
                            <p>Yoga</p>
                        </li>
                        <li data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true">
                            <img src = "./images/dwiky-small.png" alt="Dwiky">
                            <p>Dwiky</p>
                        </li>
                        <li data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true">
                            <img src = "./images/nova-small.png" alt="Nova">
                            <p>Nova</p>
                        </li>
                        <li data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true">
                            <img src = "./images/deva-small.png" alt="Deva">
                            <p>Deva</p>
                        </li>
                    </ul>
                   <h4>Menjaga Alam Adalah Tugas Kita Semua Sebagai Manusia, Untuk Menjadi Rahmat Bagi Semesta</h4>
            </div>

            <div class="about">
                <h2>Tentang Kami</h2>
                <p>Pelipur merupakan sebuah website yang menjembatani masyarakat dalam pengumpulan minyak jelantah yang nantinya akan diolah menjadi bahan bakar biodiesel. Kami juga ingin dimasa yang akan datang dapat mengelola berbagai macam limbah.</p>
                <p>Pelipur dibuat oleh peserta Studi Independen Bersetifikat Batch Kedua Dicoding yang gelisah terhadap permasalahan lingkungan yang dari hari ke hari sangat memprihatinkan. Oleh sebab itu, kami berharap dengan hadirnya pelipur masyarakat lebih peduli lagi terhadap lingkungan terutama pada limbah minyak jelantah.</p>
            </div>
        </div>
    `;
  }
}

customElements.define('founder-aboutus', FounderAboutus);

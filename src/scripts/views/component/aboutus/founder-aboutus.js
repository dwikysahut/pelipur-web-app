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
            }

            .founder-about .founder{
                width:50%;
                margin:30px auto;
                padding:10px;
                display: flex;
                flex-direction:column;
                align-items: center;
                box-sizing:border-box;
                text-align:center;
        
            }

            .founder-about .founder ul{              
                list-style: none;
                display: flex;
                justify-content: center;
                padding: 0;
                width: 80%;
                gap:10px;
                align-items: center
            }

            .founder-about .founder ul li{      
            }
            li {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            li > p {
                margin:0;

            }

            .founder h2 {
                font-size: 23px;
                font-weight: 500;
            }

        .founder-about .founder h4{
            color:#005555;
            font-size: 15px;
        }

            .founder-about .founder img{
                width: 100%;
                
                box-sizing:border-box;
                
            }

             .founder-about .about{
                 width:100%;
                 padding:15px;
                 box-sizing:border-box;
             }

             .founder-about .about h2{
                font-size: 23px;
                font-weight: 500;
                margin-bottom:20px;
                text-align:center;
             }

             .founder-about .about p{
                font-size: 15px;
                text-align: justify;
             }

              @media screen and (min-width:600px){
                .founder ul{
                   display:flex;
                    justify-content: center;
                  }

                .founder-about .about{
                 width:60%;
                 padding:15px;
                 margin: 30px auto 0;
                 box-sizing:border-box;
                  }

                  .founder-about .founder img{
                      width:100%;
                  }
              }

             @media screen and (min-width:1000px){
                .founder-about{
                  width:90%;
                  display:flex;          
                }
                .founder-about .about{
                    width:50%;
                }

                .founder ul{
                    display:flex;
                    justify-content: center;
                }
             }

             @media screen and (min-width:1300px){
                .founder-about{
                  width:100%;
                  display:flex;
                }

                 .founder{
                    width:40%;    
                    margin-left:30px;                   
                }
                .about{
                    width:40%;
                    margin-right:30px;
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
                            <img src = "./images/heros/yoga2.jpg" alt="Yoga">
                            <p>Yoga</p>
                        </li>
                        <li data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true">
                            <img src = "./images/heros/dwiky.jpg" alt="Dwiky">
                            <p>Dwiky</p>
                        </li>
                        <li data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true">
                            <img src = "./images/heros/nova.jpg" alt="Nova">
                            <p>Nova</p>
                        </li>
                        <li data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true">
                            <img src = "./images/heros/deva.jpg" alt="Deva">
                            <p>Deva</p>
                        </li>
                    </ul>
                   <h4>Menjaga Alam Adalah Tugas Kita Semua Sebagai Manusia, Untuk Menjadi Rahmat Bagi Semesta</h4>
            </div>

            <div class="about">
                    <h2>Tentang Kami</h2>
                    <p> Pelipur merupakan sebuah website yang menjembatani masyarakat dalam pengumpulan minyak jelantah yang kemudian dijual sebagai bahan bakar biodiesel. Biodiesel merupakan bahan bakar yang terdiri dari campuran mono--alkyl ester dari rantai panjang asam lemak. Kami berharap dimasa yang akan datang bukan hanya limbah minyak jelantah, tapi bisa mengelola limbah lainnya.

                    Project yang dihasilkan oleh peserta SIB yang gelisah terhadap permasalahan lingkungan yang dari hari ke hari sangat memprihatinkan. Oleh sebab itu, kami berharap dengan hadirnya pelipur masyarakat lebih peduli lagi terhadap lingkungan terutama pada limbah minyak jelantah. 

                    </p>
            </div>
        </div>
        
        `;
  }
}

customElements.define('founder-aboutus', FounderAboutus);

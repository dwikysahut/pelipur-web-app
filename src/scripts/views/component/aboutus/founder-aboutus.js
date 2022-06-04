class FounderAboutus extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `

        <style>
            .founder-about{
                display:grid;
                grid-template-columns: 1fr ;
                width:100%;
                margin:60px auto;
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

        .founder-about .founder h2{
            font-family:calibri;
            color:#005555;
        }

        .founder-about .founder h4{
            font-family:calibri;
            color:#005555;
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
                font-family:Tahoma;
                color:#005555;
                margin-bottom:20px;
        
             }

             .founder-about .about p{
                font-family:calibri;
                font-size:17px;
             }

              @media screen and (min-width:600px){
                .founder ul{
                   display:flex;
                    justify-content: center;
                  }

                .founder-about .about{
                 width:60%;
                 padding:15px;
                 margin:auto;
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

                .founder-about .about h2{
                    text-align:center;
                }

                .founder-about .founder{
                                 
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
                        <li><img src = "./images/heros/yoga2.jpg"><p>Yoga</p</li>
                        <li><img src = "./images/heros/dwiky.jpg"><p>Dwiky</p</li>
                        <li><img src = "./images/heros/logo.png"><p>Nova</p</li>
                        <li><img src = "./images/heros/deva.jpg"><p>Deva</p</li>
                        
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

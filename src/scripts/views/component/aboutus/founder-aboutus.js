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
                margin:20px auto;
            }

            .founder-about .founder{
                width:50%;
                margin:10px auto;
                padding:10px;
                box-sizing:border-box;
            }

            .founder-about .founder ul{
                list-style:none;
                
            }

        .founder-about .founder h3{
            font-family:calibri;
            color:#005555;
        }

            .founder-about .founder img{
                width:60%;
                margin-bottom: 30px;
                padding:10px;
                box-sizing:border-box;
            }

             .founder-about .about{
                 width:100%;
                 padding:15px;
                 box-sizing:border-box;

             }

             .founder-about .about h3{
                font-family:Tahoma;
                color:#005555;
                margin-bottom:20px;
             }

             .founder-about .about p{
                font-family:calibri;
             }

              @media screen and (min-width:600px){
                  .founder ul{
                      display:flex;
                  }
              }

             @media screen and (min-width:1000px){
                .founder-about{
                  width:90%;
                  display:flex;
                  
                }

                .founder{
                    width:100%;
                    
        
                }
                .founder ul{
                    display:flex;
                    flex-direction:row;
                }

                .founder ul li img{
              
                }
             }

             @media screen and (min-width:1300px){
                .founder-about{
                  width:80%;
                  display:flex;
                }
            }

        </style>
        

        <div class="founder-about">
            <div class="founder">
                  <h3>Founder Pelipur</h3>
                    <ul>
                        <li><img src = "./images/heros/fb.png" ></li>
                        <li><img src = "./images/heros/fb.png" ></li>
                        <li><img src = "./images/heros/mail.png" ></li>
                        <li><img src = "./images/heros/mail.png" ></li>
                        
                    </ul>
            </div>

            <div class="about">
                    <h3>Tentang Kami</h3>
                    <p> Pelipur merupakan sebuah website yang menjembatani masyarakat dalam pengumpulan minyak jelantah yang kemudian dijual sebagai bahan bakar biodiesel. Biodiesel merupakan bahan bakar yang terdiri dari campuran mono--alkyl ester dari rantai panjang asam lemak. 

                    Project yang dihasilkan oleh peserta SIB yang gelisah terhadap permasalahan lingkungan yang dari hari ke hari sangat memprihatinkan. Oleh sebab itu, kami berharap dengan hadirnya pelipur masyarakat lebih peduli lagi terhadap lingkungan terutama pada limbah minyak jelantah. 

                    </p>
            </div>
        </div>
        
        `;
  }
}

customElements.define('founder-aboutus', FounderAboutus);

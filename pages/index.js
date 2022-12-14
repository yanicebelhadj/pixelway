import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/HomePage.module.css';

import Check from "../icons/Check"
import ChevronRight from '../icons/ChevronRight';
import ChevronBottom from '../icons/ChevronBottom';

import Macbook from "../media/macbook.png"
import CreationSiteWeb from "../media/creationSiteWeb.png"
import Eyes from "../media/eyes.png"
import Heart from "../media/heart.png"
import Hear from "../media/hear.png"
import PageWeb from "../media/pageWeb.png"
import Identite from "../media/identite.png"
import SurMesure from "../media/surMesure.png"
import Referencement from "../media/referencement.png"
import PourquoiSiteWeb from "../media/pourquoiSiteWeb.png"
import Diagnostique from "../media/diagnostique.png"
import UxRecherche from "../media/uxRecherche.png"
import DesignWeb from "../media/designWeb.png"
import Developpement from "../media/developpement.png"
import Formation from "../media/formation.png"
import Maintenance from "../media/maintenance.png"

import Header from '../components/Header.js';
import Modal from './contact.js'
import Footer from '../components/Footer';


const HomePage = () =>{

  const[openModal, setOpenModal] = useState(false);

  const [diagnostique, setDiagnostique] = useState(true);
  const [uxRecherche, setUxRecherche] = useState(false);
  const [designWeb, setDesignWeb] = useState(false);
  const [developpement, setDeveloppement] = useState(false);
  const [formation, setFormation] = useState(false);
  const [maintenance, setMaintenance] = useState(false);
  
  const DiagnostiqueVisible = () => {
    setDiagnostique(true);
    setUxRecherche(false);
    setDesignWeb(false);
    setDeveloppement(false);
    setFormation(false);
    setMaintenance(false);
  };

  const UxRechercheVisible = () => {
    setDiagnostique(false);
    setUxRecherche(true);
    setDesignWeb(false);
    setDeveloppement(false);
    setFormation(false);
    setMaintenance(false);      
  };

  const DesignWebVisible = () => {
    setDiagnostique(false);
    setUxRecherche(false);
    setDesignWeb(true);
    setDeveloppement(false);
    setFormation(false);
    setMaintenance(false);      
  };

  const DeveloppementVisible = () => {
    setDiagnostique(false);
    setUxRecherche(false);
    setDesignWeb(false);
    setDeveloppement(true);
    setFormation(false);
    setMaintenance(false);  
  };

  const FormationVisible = () => {
    setDiagnostique(false);
    setUxRecherche(false);
    setDesignWeb(false);
    setDeveloppement(false);
    setFormation(true);
    setMaintenance(false);      
  };

  const MaintenanceVisible = () => {          
    setDiagnostique(false);
    setUxRecherche(false);
    setDesignWeb(false);
    setDeveloppement(false);
    setFormation(false);
    setMaintenance(true);      
  };


  return(
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pixelway</title>
        <meta name = "Pixelway" content = "On cr???? votre site web de A ?? Z" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header openModal={setOpenModal} />

        <div className={styles.homePage}>
            <section className={styles.mainSection}>

            <div className={styles.mainSectionTextCta}>
                <div className={styles.mainSectionText}>
                    <h1>Et si vos clients vous retrouvaient sur <span style={{color:"#3170F7"}}>votre site web</span></h1>
                    <p className={styles.description}>D??marquez vous en cr??ant un site web professionnel qui vous ressemble.</p>
                    <ul>
                        <li><div className={styles.Check}><Check /></div><p>Augmenter votre <strong>visibilit??</strong></p></li>
                        <li><div className={styles.Check}><Check /></div><p>Site <strong>100%</strong> personnalis??</p></li>
                        <li><div className={styles.Check}><Check /></div><p>Identit?? visuelle <strong>unique</strong></p></li>
                    </ul>
                </div>
                <div className={styles.mainSectionCta}>
                    <div className={styles.creationSiteWeb}>
                        <button className={styles.openModalBtn} onClick={() => {setOpenModal(true);}}>Je cr??e mon site web</button>
                        <p id={styles.desktop}>Faites votre devis gratuitement</p>
                    </div>
                    <a href="#services" id={styles.enSavoirPlus}>En savoir plus</a>
                    <p id={styles.mobile}>Faites votre devis gratuitement</p>
                </div>
            </div>

            <div className={styles.mainSectionImage}>
                <Image id={styles.imageMainSection} src={Macbook} alt="Macbook" objectFit='contain' />
            </div>

            </section>

            <section className={styles.accroche}>
            <h2>Concentrez-vous sur votre business, pixelway s???occupe du reste</h2>
            <div className={styles.accrocheTextImage}>
                <Image id={styles.accrocheImage} src={CreationSiteWeb} alt="Creation Site Web" />
                <div className={styles.accrocheText}>
                    <h3>Choisissez Pixelway pour votre projet web</h3>
                    <ul>
                        <li><Check /><p>Pixelway est l???agence de cr??ation de site web qui vous fera vivre une exp??rience utilisateur unique et sur mesure.</p></li>
                        <li><Check /><p>B??n??ficiez d???un accompagnement de A ?? Z avec notre ??quipe passionn??e de challenge.</p></li>
                        <li><Check /><p>Concentrez-vous sur l???essentiel : le d??veloppement de votre soci??t??. Confiez votre croissance ?? des experts disponibles pour concevoir vos projets. </p></li>
                    </ul>
                </div>
            </div>
            </section>

            <section className={styles.qualites}>
                <h2>Les qualit??s de l???agence ?? choisir</h2>
                <div className={styles.listeQualites}>
                    
                    <div className={styles.qualite}>
                        <Image id={styles.iconQualite} src={Eyes} alt="Collaboratif"/>
                        <h3>Collaboratif</h3>
                        <p>
                            Nous optons pour un travail collaboratif tout au long du projet. 
                            Gr??ce ?? nos ateliers UX, vous serez au c??ur des d??cisions pour 
                            que votre site se rapproche au mieux de votre marque
                        </p>
                    </div>

                    <div className={styles.qualite}>
                        <Image id={styles.iconQualite} src={Hear} alt="A l'??coute"/>
                        <h3>?? l?????coute</h3>
                        <p>
                            Nous savons prendre en compte vos envies tout en vous proposant des id??es 
                            qui les rendront meilleures. Notre expertise en webdesign vous permettra 
                            d???avoir un r??sultat unique
                        </p>
                    </div>

                    <div className={styles.qualite}>
                        <Image id={styles.iconQualite} src={Heart} alt="Transparent"/>
                        <h3>Transparent</h3>
                        <p>
                            Aucune surprise. Nous vous tiendrons inform?? de l???avanc?? de votre projet ?? 
                            chaque ??tape pour que vous puissiez intervenir ?? tout moment dans le process 
                            de cr??ation
                        </p>
                    </div>
                    
                </div>
            </section>

            <section id="services" className={styles.services}>
            <h2>Nos services personnalis??s</h2>
            <div className={styles.listeServices}>
                <div className={styles.service}>
                    <div className={styles.titre}>
                        <Image id={styles.iconsService} src={PageWeb} alt="Creation de site web Page Web Application web"/>
                        <h3>Cr??ation de site internet</h3>
                    </div>
                    <p>
                        Nous cr??ons des sites web <strong>(web-app, site vitrine ou encore site e-commerce)</strong> 100% personnalis??s. 
                        Nous proposons pour vous ainsi que pour vos clients des exp??riences innovantes et dans l???air du temps.  
                    </p>
                </div>

                <div className={styles.service}>
                    <div className={styles.titre}>
                        <Image id={styles.iconsService} src={Identite} alt="Identite de marque"/>
                        <h3>Identit?? de marque</h3>
                    </div>
                    <p>
                        Confiez ?? Pixelway votre image de marque. Nos experts sont sp??cialis??s en cr??ation d???identit?? visuelle et sauront 
                        vous proposer une <strong>charte graphique ainsi qu???un logo inspir??s de votre marque</strong> comme point de d??part.   
                    </p>
                </div>

                <div className={styles.service}>
                    <div className={styles.titre}>
                        <Image id={styles.iconsService} src={SurMesure} alt="Design web sur mesure"/>
                        <h3>Design web sur mesure</h3>
                    </div>
                    <p>
                        Savez-vous qu???un webdesigner n???intervient pas seulement sur l???aspect esth??tique, mais aussi et surtout sur l???ergonomie de 
                        votre site ? Nous sommes <strong>sp??cialis??s en UX/ UI Design</strong> et toutes nos propositions sont dans l???air du temps.  
                    </p>
                </div>

                <div className={styles.service}>
                    <div className={styles.titre}>
                        <Image id={styles.iconsService} src={Referencement} alt="R??f??rencement naturel"/>
                        <h3>R??f??rencement web</h3>
                    </div>
                    <p>
                        Nous donnerons ?? votre entreprise la visibilit?? qu&apos;elle m??rite ?? travers un r??f??rencement web naturel ou plus encore.
                        Cela permettra de <strong>rendre votre site plus attractif</strong> et donc de maximiser votre visibilit??.   
                    </p>
                </div>
            </div>
            </section>

            <section className={styles.pourquoiSiteWeb}>
                <h2>Pourquoi faut-il avoir un site web ? </h2>
                <div className={styles.pourquoiSiteWebTextImage}>
                    <Image src={PourquoiSiteWeb} alt="Pourquoi un site Web" />
                    <div className={styles.pourquoiSiteWebText}>
                        <h3>Boostez la croissance de votre entreprise</h3>
                        <p>
                            Votre site web est votre carte de visite en ligne. Il fera la pr??sentation de votre entreprise, 
                            votre organisation, vos produits et services. <strong>81% des entreprises fran??aises ayant fait faillite 
                            en 2013</strong> ont purement et simplement oubli?? de parier sur le Net.
                        </p>
                        <button onClick={() => {setOpenModal(true);}}>Je cr??e mon site web</button>
                    </div>

                </div>
            </section>

            <section className={styles.methode}>
                <h2>Notre m??thode de cr??ation, id??ale pour la croissance de votre entreprise</h2>
                <div className={styles.etapeMethode}>
                    <p className={ diagnostique ? styles.souligne : ""} onClick={DiagnostiqueVisible} >Diagnostique</p>
                    <div className={styles.ChevronRight}>
                    <ChevronRight />
                    </div>
                    <p className={ uxRecherche ? styles.souligne : ""} onClick={UxRechercheVisible} >UX Research</p>
                    <div className={styles.ChevronRight}>
                    <ChevronRight />
                    </div>
                    <p className={ designWeb ? styles.souligne : ""} onClick={DesignWebVisible} >Design web</p>
                    <div className={styles.ChevronRight}>
                    <ChevronRight />
                    </div>
                    <p className={ developpement ? styles.souligne : ""} onClick={DeveloppementVisible} >D??veloppement</p>
                    <div className={styles.ChevronRight}>
                    <ChevronRight />
                    </div>
                    <p className={ formation ? styles.souligne : ""} onClick={FormationVisible} >Formation</p>
                    <div className={styles.ChevronRight}>
                    <ChevronRight />
                    </div>
                    <p className={ maintenance ? styles.souligne : ""} onClick={MaintenanceVisible} >Maintenance</p>
                </div>

                <div className={styles.etapeMethodeTextImage}>
                
                    <div className={ `${styles.etape} ${diagnostique ? styles.diagnostique : ""}` }>
                        <Image className={`${diagnostique ? styles.imageEtapeVisible : ""}`} src={Diagnostique} alt="Recherche UX" />
                        <div className={`${styles.etapeMethodeText} ${diagnostique ? styles.textEtapeVisible : ""}`} >
                            <div className={styles.enTete}>
                                <div className={styles.lineAvantText}></div>
                                <p className={styles.titleEtape}>Premi??re ??tape</p>
                                <div className={styles.lineApresText} ></div>
                            </div>
                            <p>
                            Le diagnostique permet d???examiner votre identit?? visuelle et de mettre en place la meilleure strat??gie de marque visuelle. 
                            Cette phase est primordiale pour vous donner les solutions les plus adapt??es et r??diger votre cahier des charges. 
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.etape} ${uxRecherche ? styles.uxRecherche : ""}`} >
                        <Image src={UxRecherche} alt="Recherche UX"/>
                        <div className={`${styles.etapeMethodeText} ${diagnostique ? styles.textEtapeVisible : ""}`} >
                            <div className={styles.enTete}>
                                <div className={styles.lineAvantText}></div>
                                <p className={styles.titleEtape}>Deuxi??me ??tape</p>
                                <div className={styles.lineApresText} ></div>
                            </div>
                            <p>
                            Dans cette phase, nous nous concentrerons sur vos clients, vos futurs utilisateurs. La recherche UX servira ?? d??couvrir leurs 
                            besoins, leurs attentes ainsi que leurs possibles frustrations. Elle est n??cessaire pour proposer un site qui s???adapte parfaitement 
                            ?? votre business ainsi qu???aux besoins des clients. <br/><br/>Cela se traduit par des entretiens utilisateur, des tests utilisateurs, des ateliers 
                            UX, la cr??ation de personas et d???autres solutions pour conna??tre parfaitement vos clients.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.etape} ${designWeb ? styles.designWeb : ""}`} >
                        <Image src={DesignWeb} alt="Recherche UX"/>
                        <div className={`${styles.etapeMethodeText} ${diagnostique ? styles.textEtapeVisible : ""}`} >
                            <div className={styles.enTete}>
                                <div className={styles.lineAvantText}></div>
                                <p className={styles.titleEtape}>Troisi??me ??tape</p>
                                <div className={styles.lineApresText} ></div>
                            </div>
                            <p>
                            Apr??s les phases respectives de recherche et de d??couverte, il est temps de se focaliser sur le design de votre site. 
                            La premi??re ??tape consiste ?? cr??er des wireframes pour r??aliser l???architecture de la plateforme. Apr??s une validation 
                            conjointe des wireframes ?? travers des ateliers, nous passerons ?? la r??alisation des maquettes. <br/><br/>Les ma??tres-mots du web design 
                            sont l???exp??rience utilisateur, l???ergonomie et l???interactivit??. Nous mettrons tout en ??uvre pour que votre site soit unique, accessible et s???inscrive dans l???air du temps.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.etape} ${developpement ? styles.developpement : ""}`} >
                        <Image src={Developpement} alt="Recherche UX"/>
                        <div className={`${styles.etapeMethodeText} ${diagnostique ? styles.textEtapeVisible : ""}`} >
                            <div className={styles.enTete}>
                                <div className={styles.lineAvantText}></div>
                                <p className={styles.titleEtape}>Quatri??me ??tape</p>
                                <div className={styles.lineApresText} ></div>
                            </div>
                            <p>
                            Un site se doit d?????tre ?? l???image de l???entreprise, c???est-??-dire professionnel. L???objectif final est donc que le site soit ?? la fois le plus fluide et performant possible. 
                            De ce fait, nous utiliserons les meilleurs outils afin de d??velopper ce dernier. <br/><br/>Rappelons qu???un site bien d??velopp?? sera mieux positionn?? dans les moteurs de recherches.
                            La tra??abilit?? est un ??l??ment cl?? dans le travail d???un d??veloppeur. Pour ce faire, notre code sera expliqu?? en d??tail dans le but d&apos;??tre maintenable et ??volutif.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.etape} ${formation ? styles.formation : ""}`} >
                        <Image src={Formation} alt="Recherche UX"/>
                        <div className={`${styles.etapeMethodeText} ${diagnostique ? styles.textEtapeVisible : ""}`} >
                            <div className={styles.enTete}>
                                <div className={styles.lineAvantText}></div>
                                <p className={styles.titleEtape}>Cinqui??me ??tape</p>
                                <div className={styles.lineApresText} ></div>
                            </div>
                            <p>
                            Cr??er un beau site web ne suffit pas. Il faut que vous, ainsi que vos ??quipes soyez capable de 
                            le manipuler simplement. Apr??s le d??veloppement de votre site, nous ferons des s??ances de formations 
                            courtes et concises pour que vous ayez une ma??trise totale de votre produit. 
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.etape} ${maintenance ? styles.maintenance : ""}`} >
                        <Image src={Maintenance} alt="Recherche UX"/>
                        <div className={`${styles.etapeMethodeText} ${diagnostique ? styles.textEtapeVisible : ""}`} >
                            <div className={styles.enTete}>
                                <div className={styles.lineAvantText}></div>
                                <p className={styles.titleEtape}>Sixi??me ??tape</p>
                                <div className={styles.lineApresText} ></div>
                            </div>
                            <p>
                            La p??rennit??, la performance ainsi que la fid??lisation de vos clients sont des donn??es d???entr??es importantes pour les utilisateurs de votre site web. Ainsi, nous proposons une maintenance du site.  
                            <br/><br/>Les op??rations de maintenance se traduisent par les diff??rentes actions permettant l???optimisation du site qui offre alors une exp??rience utilisateur optimale aux visiteurs. 
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className={styles.methodeMobile}>

            <h2>Les qualit??s de l???agence ?? choisir</h2>

            <div className={styles.etape}>
                <div className={`${styles.title} ${diagnostique ? styles.souligne : ""}`} onClick={DiagnostiqueVisible}>
                    <h3 className={`${diagnostique ? styles.souligne : ""}`}>Diagnostique</h3>
                    <div className={styles.ChevronBottom}><ChevronBottom /></div>
                </div>

                <div className={`${styles.etapeTextImage} ${diagnostique ? styles.diagnostique : ""}`}>
                    <Image id={styles.imageEtape} src={Diagnostique} alt='Diagnostique'/>
                    <div className={styles.etapeText}>
                        <p id={styles.title}>Premi??re ??tape</p>
                        <p>
                            Le diagnostique permet d???examiner votre identit?? visuelle et de mettre en place la meilleure strat??gie de marque visuelle. 
                            Cette phase est primordiale pour vous donner les solutions les plus adapt??es et r??diger votre cahier des charges.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.etape}>
                <div className={`${styles.title} ${uxRecherche ? styles.souligne : ""}`} onClick={UxRechercheVisible}>
                    <h3 className={`${uxRecherche ? styles.souligne : ""}`}>UX Research</h3>
                    <div className={styles.ChevronBottom}><ChevronBottom /></div>
                </div>

                <div className={`${styles.etapeTextImage} ${uxRecherche ? styles.uxRecherche : ""}`}>
                    <Image id={styles.imageEtape} src={UxRecherche} alt="Recherche UX"/>
                    <div className={styles.etapeText}>
                        <p id={styles.title}>Deuxi??me ??tape</p>
                        <p>
                            Dans cette phase, nous nous concentrerons sur vos clients, vos futurs utilisateurs. La recherche UX servira ?? d??couvrir leurs 
                            besoins, leurs attentes ainsi que leurs possibles frustrations. Elle est n??cessaire pour proposer un site qui s???adapte parfaitement 
                            ?? votre business ainsi qu???aux besoins des clients. <br/><br/>Cela se traduit par des entretiens utilisateur, des tests utilisateurs, des ateliers 
                            UX, la cr??ation de personas et d???autres solutions pour conna??tre parfaitement vos clients.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.etape}>
                <div className={`${styles.title} ${designWeb ? styles.souligne : ""}`} onClick={DesignWebVisible}>
                    <h3 className={`${designWeb ? styles.souligne : ""}`}>Design web</h3>
                    <div className={styles.ChevronBottom}><ChevronBottom /></div>
                </div>

                <div className={`${styles.etapeTextImage} ${designWeb ? styles.designWeb : ""}`}>
                    <Image id={styles.imageEtape} src={DesignWeb} alt="Design web"/>
                    <div className={styles.etapeText}>
                        <p id={styles.title}>Troisi??me ??tape</p>
                        <p>
                            Apr??s les phases respectives de recherche et de d??couverte, il est temps de se focaliser sur le design de votre site. 
                            La premi??re ??tape consiste ?? cr??er des wireframes pour r??aliser l???architecture de la plateforme. Apr??s une validation 
                            conjointe des wireframes ?? travers des ateliers, nous passerons ?? la r??alisation des maquettes. <br/><br/>Les ma??tres-mots du web design 
                            sont l???exp??rience utilisateur, l???ergonomie et l???interactivit??. Nous mettrons tout en ??uvre pour que votre site soit unique, accessible et s???inscrive dans l???air du temps.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.etape}>
                <div className={`${styles.title} ${developpement ? styles.souligne : ""}`} onClick={DeveloppementVisible}>
                    <h3 className={`${developpement ? styles.souligne : ""}`}>D??veloppement</h3>
                    <div className={styles.ChevronBottom}><ChevronBottom /></div>
                </div>

                <div className={`${styles.etapeTextImage} ${developpement ? styles.developpement : ""}`}>
                    <Image id={styles.imageEtape} src={Developpement} alt="Developpement"/>
                    <div className={styles.etapeText}>
                        <p id={styles.title}>Quatri??me ??tape</p>
                        <p>
                            Un site se doit d?????tre ?? l???image de l???entreprise, c???est-??-dire professionnel. L???objectif final est donc que le site soit ?? la fois le plus fluide et performant possible. 
                            De ce fait, nous utiliserons les meilleurs outils afin de d??velopper ce dernier. <br/><br/>Rappelons qu???un site bien d??velopp?? sera mieux positionn?? dans les moteurs de recherches.
                            La tra??abilit?? est un ??l??ment cl?? dans le travail d???un d??veloppeur. Pour ce faire, notre code sera expliqu?? en d??tail dans le but d&apos;??tre maintenable et ??volutif.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.etape}>
                <div className={`${styles.title} ${formation ? styles.souligne : ""}`} onClick={FormationVisible}>
                    <h3 className={`${formation ? styles.souligne : ""}`}>Formation</h3>
                    <div className={styles.ChevronBottom}><ChevronBottom /></div>
                </div>

                <div className={`${styles.etapeTextImage} ${formation ? styles.formation : ""}`}>
                    <Image id={styles.imageEtape} src={Formation} alt="Formation"/>
                    <div className={styles.etapeText}>
                        <p id={styles.title}>Cinqui??me ??tape</p>
                        <p>
                            Cr??er un beau site web ne suffit pas. Il faut que vous, ainsi que vos ??quipes soyez capable de 
                            le manipuler simplement. Apr??s le d??veloppement de votre site, nous ferons des s??ances de formations 
                            courtes et concises pour que vous ayez une ma??trise totale de votre produit. 
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.etape}>
                <div className={`${styles.title} ${maintenance ? styles.souligne : ""}`} onClick={MaintenanceVisible}>
                    <h3 className={`${maintenance ? styles.souligne : ""}`}>Maintenance</h3>
                    <div className={styles.ChevronBottom}><ChevronBottom /></div>
                </div>

                <div className={`${styles.etapeTextImage} ${maintenance ? styles.maintenance : ""}`}>
                    <Image id={styles.imageEtape} src={Maintenance} alt="Maintenance"/>
                    <div className= {styles.etapeText}>
                        <p id={styles.title}>Sixi??me ??tape</p>
                        <p>
                            La p??rennit??, la performance ainsi que la fid??lisation de vos clients sont des donn??es d???entr??es importantes pour les utilisateurs de votre site web. Ainsi, nous proposons une maintenance du site.  
                            <br/><br/>Les op??rations de maintenance se traduisent par les diff??rentes actions permettant l???optimisation du site qui offre alors une exp??rience utilisateur optimale aux visiteurs. 
                        </p>
                    </div>
                </div>
            </div>

            </section>

            {openModal && <Modal openModal={setOpenModal} />} 

        </div>

        <Footer />
        
      </main>
    </>
  )
}

export default HomePage
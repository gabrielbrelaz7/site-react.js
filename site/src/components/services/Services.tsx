import "../services/Services.css";

export const Services = () => {

    return (
        <div>

            <section id="workstation" className="work section">
                <div className="container">
                    <h2 className="title">Serviços realizados</h2>
                    <div className="row">

                        <div className="col-sm-4">
                            <div className="item">
                                <div className="ubutia-card">
                                    <div className="ubutia-card-header">
                                        <img className="img-responsive" src="assets/images/homepage/66.jpg"></img>
                                    </div>
                                    <div className="ubutia-card-content">
                                        <h5>Desenvolvimento web</h5>
                                        <p>
                                            Funcionalidades e projetos web
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <a className="btn ubutia-btn small-btn" href="../desenvolvimento_web.html">VEJA MAIS</a>
                                </div>

                            </div>
                        </div>

                        <div className="col-sm-4">

                            <div className="item">
                                <div className="ubutia-card">

                                    <div className="ubutia-card-header">
                                        <img className="img-responsive" src="assets/images/homepage/55.jpg"></img>
                                    </div>

                                    <div className="ubutia-card-content">
                                        <h5>Web Design</h5>
                                        <p>
                                            Peças publicitárias e sites para web.
                                        </p>

                                    </div>

                                    <div>
                                        <a className="btn ubutia-btn small-btn" href="../webdesign.html">VEJA MAIS</a>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-sm-4">
                            <div className="item">
                                <div className="ubutia-card">
                                    <div className="ubutia-card-header">
                                        <img className="img-responsive" src="assets/images/homepage/4.jpg"></img>
                                    </div>
                                    <div className="ubutia-card-content">
                                        <h5>Ilustrações Digitais</h5>
                                        <p>
                                            Peças de publicidade para impressão
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <a className="btn ubutia-btn small-btn" href="../ilustracoes.html">VEJA MAIS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};
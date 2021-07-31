import React from "react";

const Footer = (props) => {

    const Footer = props.data.PiePagina[0];
    return(
        <>
            <footer className="sticky-footer bg-primary">
                <div className="container my-auto">
                    <div className="copyright text-light text-center my-auto">
                        <h4 className="mt-2">
                            <b>{Footer.Derechos}</b>
                        </h4>   
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer
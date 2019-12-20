import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderPartner({ partner }) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object width="150" src={partner.image} alt={partner.name} />
                <Media body className="ml-5 mb-4">
                    <Media heading>
                        {partner.name}
                    </Media>
                    <Media>
                        {partner.description}
                    </Media>
                </Media>
            </React.Fragment>
        );
    }
    return <div />

}



function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner} />
            </Media>
        );
    });


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                   
                    <h2>About me</h2>
                    <hr></hr>
                    
                </div>
            </div>
            


           
                <div className="col-12">
                    <h3>Maureen Flynn</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                    <hr></hr>
                </div>
            



        </div>

    );

}




export default About;
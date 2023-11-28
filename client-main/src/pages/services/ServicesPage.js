import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, config } from "../../utils/api";
import ServiceBox from "../../components/cards/service-card/ServiceBox";
import LinkContainer from "../../components/LinkContainer";
import "./ServicesPage.css";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  const onTwitterIconClick = () => {
    window.open(
      "https://twitter.com/shdrltd1/status/1641700159632310277?s=48&t=r-GBVBzTpZjRfn_mV3wpkw"
    );
  };
    useEffect(() => {
      const fetchServices = async () => {
        try {
          const response = await axios.get(`${API_URL}/services`, config);
          console.log(response.data.data.services);
          if (response.data.success) {
            setServices(response.data.data.services);
          } else {
            // toast.error("Failed to fetch owners");
          }
        } catch (error) {
          // toast.error("An error occurred while fetching owners");
        }
      };
      fetchServices();
    }, []);

  return (
    <div className="servicespage">
      <div className="servicescontent">
        {services.map((service) => (
          <ServiceBox image={service.image[0]} price={service.price} title={service.title} description={service.description}  key={service._id} />
          
        ))}
        {/* <ServiceBox /> */}
      </div>
      <LinkContainer
        dimensions="/facebookicon1.svg"
        dimensions89="/shdrremovebgpreview-1@2x.png"
        onTwitterIconClick={onTwitterIconClick}
      />
    </div>
  );
};

export default ServicesPage;

import { useEffect, useState } from "react";

import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import AvatarCompany from "../components/AvatarCompany/AvatarCompany";
import JobOffer from "../components/JobOffer/JobOffer";
import ButtonsDelete from "../components/ButtonsDelete/ButtonsDelete";
import ButtonsUpDate from "../components/ButtonsUpDate/ButtonsUpDate";
import { useUserContext } from "../contexts/UserContext";

export default function OfferPageCompany() {
  const { user } = useUserContext();
  const offers = useLoaderData();

  return (
    <div>
      <div className="flex justify-between items-center w-full  top-0 left-0 right-0 z-50">
        <div className="w-24 m-5">
          <LogoExternatic />
        </div>
      </div>
      <div>
        <AvatarCompany user={user} />
        {offers !== undefined && offers.length !== 0 ? (
          offers.map((offer) => (
            <div key={offer.id}>
              <JobOffer
                  jobTitle={offer.job_title}
                  location={offer.location}
                  minSalary={offer.min_salary}
                  maxSalary={offer.max_salary}
                  jobType={offer.job_type}
                  publishDate={offer.publish_date}
              />
              <ButtonsDelete id={offer.id} user={user} />
              <ButtonsUpDate />
            </div>
        )) : (
          <p className="text-center mt-6">
            Vous n'avez posté aucune offre pour le moment
          </p>
        )}

      </div>
    </div>
  );
}

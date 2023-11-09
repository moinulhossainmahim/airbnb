import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById"
import Listing from "./Listing";
import getReservations from "@/app/actions/getReservations";
import ClientOnly from "@/app/components/ClientOnly";

interface IParams {
  listingId?: string;
}

const page = async (
  { params }: { params: IParams }
) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

  return (
    <ClientOnly>
      <Listing
        currentUser={currentUser}
        listing={listing}
        reservations={reservations}
      />
    </ClientOnly>
  )
}

export default page

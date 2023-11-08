import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById"
import Listing from "./Listing";

interface IParams {
  listingId?: string;
}

const page = async (
  { params }: { params: IParams }
) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  return (
    <Listing
      currentUser={currentUser}
      listing={listing}
    />
  )
}

export default page

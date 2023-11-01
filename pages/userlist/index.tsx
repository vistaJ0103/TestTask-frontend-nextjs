import Table from "@/components/Tables/Table";
import RootLayout from "@/layouts";

import { Metadata } from "next";
const UserList = () => {
  return (
    <>
      <div className="flex flex-col gap-10 mt-13">
        <Table />
      </div>
    </>
  );
};
UserList.getLayout = (page: any) => {
  return <RootLayout>{page}</RootLayout>;
};
export default UserList;

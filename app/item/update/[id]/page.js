import { getSingleItem } from "../../readsingle/[id]/page";
import Form from "./form";

const UpdateItem = async (context) => {
  const params = await context.params;
  const singleItem = await getSingleItem(params.id);

  return (
    <div>
      <h1 className="page-title">아이템 수정</h1>
      <Form params={params} singleItem={singleItem} />
    </div>
  );
};
export default UpdateItem;

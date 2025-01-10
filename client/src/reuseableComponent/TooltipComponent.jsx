import { Button, Tooltip } from "flowbite-react";

const TooltipComponent = ({Content , Button}) => {
  return (
    <Tooltip className="bg-white p-0 shadow-lg shadow-indigo-500/40" content={<Content />}>
      <Button />
    </Tooltip>
  );
}


export default TooltipComponent;
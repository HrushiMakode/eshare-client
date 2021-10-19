import { PointSpreadLoading } from "react-loadingg";

const Loading = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <PointSpreadLoading
                size="small"
                color="lightblue"
                style={{
                    display: "flex",
                    alginItems: "center",
                    justifyContent: "center",
                }}
            />
        </div>
    );
};

export default Loading;

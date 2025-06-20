import { CiCloud } from "react-icons/ci";

const FarmingTips = () => {
    const farmingTips: string[] = [
        "Use organic compost to enrich soil naturally.",
        "Use mulch to retain moisture and prevent weeds.",
        "Test soil pH regularly for better crop yield.",
    ];
    return (
        <div className="tips-container bg-white px-5 py-5 rounded h-full">
            <ul>
                <div className="flex justify-start items-center gap-x-2">
                    <CiCloud style={{ strokeWidth: "2px", stroke: "green" }} />
                    <span className="font-semibold">Farming Tips</span>
                </div>
                {farmingTips.map((tip) => (
                    <li className="ml-3 text-xs text-gray-400 font-semibold list-disc my-1">{tip}</li>
                ))}
            </ul>
        </div>
    )
}
export default FarmingTips;
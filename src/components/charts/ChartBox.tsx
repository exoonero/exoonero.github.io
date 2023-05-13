interface ChartBoxProps {
    children: React.ReactNode;
  }
  
export function ChartBox({children}: ChartBoxProps) {
    return (
        <section className="bg-white w-[100%] min-[1920px]:w-[31%]  h-[19rem] min-[1920px]:h-[22.68rem] mt-[1.875rem] min-[1920px]:mt-[2.31rem] px-2">
            {children}
        </section>
    );
}
export default ChartBox;
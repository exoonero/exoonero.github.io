interface ChartBoxProps {
    children: React.ReactNode;
  }
  
export function ChartBox({children}: ChartBoxProps) {
    return (
        <section className="bg-white w-full 4xl:w-[31%] h-[19rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2">
            {children}
        </section>
    );
}
export default ChartBox;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ParticipatingBanks = () => {
  const data = [
    { feature: "Citibank", first: true, second: true, third: false, forth: false },
    { feature: "HSBC", first: true, second: true, third: false, forth: false },
    { feature: "Standard Chartered", first: true, second: true, third: false, forth: false },
    { feature: "UOB", first: true, second: true, third: true, forth: true },
    { feature: "RHB", first: true, second: true, third: false, forth: false },
    { feature: "AmBank", first: true, second: true, third: true, forth: false },
    { feature: "OCBC", first: true, second: true, third: false, forth: false },
    { feature: "Alliance", first: true, second: true, third: false, forth: false },
    { feature: "Affin", first: true, second: true, third: false, forth: false },
  ];

  return (
    <section className="text-black overflow-auto md:overflow-hidden">
        <h3 className="text-center text-[24px] md:text-[20px] mb-6 mt-10 md:mt-0 font-medium leading-[1.2]">Credit Card &amp;<span className="md:hidden block">Participating Banks</span> </h3>
      
        <table className="mx-auto font-medium w-full">
          <thead>
            <tr className="border-t border-b border-[#421908] text-[19px] leading-[1.2]">
              <th></th>
              <th className="text-[14px] md:text-[16px] border-l border-[#421908] font-medium px-2 xl:min-w-[120px] py-3">6 Months</th>
              <th className="text-[14px] md:text-[16px] border-l border-[#421908] font-medium px-2 xl:min-w-[120px] py-3">12 Months</th>
              <th className="text-[14px] md:text-[16px] border-l border-[#421908] font-medium px-2 xl:min-w-[120px] py-3">24 Months</th>
              <th className="text-[14px] md:text-[16px] border-l border-[#421908] font-medium px-2 xl:min-w-[120px] py-3">36 Months</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#421908] text-[19px]">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="text-[14px] md:text-[16px] border-b border-[#421908] pr-2 xl:pr-4 max-w-[120px] leading-[1.2]">{item.feature}</td>
                {[item.first, item.second, item.third, item.forth].map((value, i) => (
                  <td className="border-b border-l border-[#421908] py-2 text-center md:min-w-[80px] min-w-[100px]" key={i}>
                    {value && <FontAwesomeIcon icon={faCircleCheck} color={"#f5a623"} className="text-[21px] sm:text-[30px]" />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </section>
  );
};

export default ParticipatingBanks;

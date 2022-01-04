import StackableContainer from "../layout/StackableContainer";

const MultisigHoldings = (props) => {
  const uatomToAtom = (uhuahua) => {
    if (uhuahua === 0) return 0;
    return uhuahua / 1000000;
  };

  return (
    <StackableContainer lessPadding fullHeight>
      <h2>Holdings</h2>
      <StackableContainer lessPadding lessMargin>
        <span>{props.holdings} ATOM</span>
      </StackableContainer>
      <style jsx>{`
        span {
          text-align: center;
        }
      `}</style>
    </StackableContainer>
  );
};
export default MultisigHoldings;

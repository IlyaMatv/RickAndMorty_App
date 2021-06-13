import React from "react";
import LoaderContainer from "./Loader";

const MainLoader = ({ isLoading }) => isLoading && <LoaderContainer />;

export default MainLoader;

// type Props = {
//     isLoading: any;
//   };

//   const MainLoader = ({ isLoading }: Props) => (isLoading && <LoaderContainer />);

//   const mapStateToProps = (state: RootState) => ({
//     isLoading: state.loading > 0,
//   });

//   export default connect(mapStateToProps)(MainLoader);

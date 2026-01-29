import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ServiceMain from '../components/service';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Triple Ground Mulch in Bulk'} />
      <ServiceMain />
    </Wrapper>
  );
};

export default index;
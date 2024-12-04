import { Breadcrumb, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

export const generateBreadcrumbItems = (location) => {
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const key = pathSnippets[index];

    const labelMap = {
      Calculator: 'Calculator',
      HanziCard: 'Hanzi Card',
      SearchSingle: 'Search',
      // Add more mappings if needed
    };

    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{labelMap[key] || key}</Link>
      </Breadcrumb.Item>
    );
  });

  return [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
    ...breadcrumbItems,
  ];
};

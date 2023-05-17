import {Descriptions} from 'antd';

const DescriptionsComponent = ({hanzi}) => {
  return (
    <div>
      <Descriptions
        title={"Descriptions of " + hanzi.id}
        bordered={false}
        column={{
          xxl: 4,
          xl: 3,
          lg: 3,
          md: 3,
          sm: 2,
          xs: 1,
        }}
      >
        <Descriptions.Item label="id">{hanzi.id}</Descriptions.Item>
        <Descriptions.Item label="pinyin">{hanzi.pinyin}</Descriptions.Item>
        <Descriptions.Item label="cantonese">{hanzi.cantonese}</Descriptions.Item>
        <Descriptions.Item label="hanViet">{hanzi.hanViet}</Descriptions.Item>
        <Descriptions.Item label="meaningInVietnamese">
          {hanzi.meaningInVietnamese}
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
};

export default DescriptionsComponent;
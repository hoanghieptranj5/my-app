import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Card} from 'antd';

const {Meta} = Card;

const HanziCard = ({hanzi}) => {
  return (
    <Card
      style={{width: 300}}
      cover={
        <b style={{ fontSize: 120, fontFamily: 'kaiti', marginLeft: '26%' }}>{hanzi}</b>
      }
      actions={[
        <SettingOutlined key="setting"/>,
        <EditOutlined key="edit"/>,
        <EllipsisOutlined key="ellipsis"/>,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joesch.moe/api/v1/random"/>}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

export default HanziCard;
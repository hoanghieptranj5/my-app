import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Card} from 'antd';
import DescriptionsComponent from "../Description/Description";
import {useState} from "react";

const {Meta} = Card;

const HanziCard = ({ hanzi }) => {
  const [showMore, toggleShowMore] = useState(true);

  const clickShowMoreButton = (value) => {
    toggleShowMore(true);
  }

  const clickCollapseButton = (value) => {
    toggleShowMore(false);
  }

  return (
    <Card
      style={{width: "100%"}}
      cover={
        <b style={{ fontSize: 120, fontFamily: 'kaiti, kaiti SC', marginLeft: '1%' }}>{hanzi.id}</b>
      }
      actions={[
        <SettingOutlined key="setting"/>,
        <EditOutlined key="edit"/>,
        <EllipsisOutlined key="ellipsis"/>,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joesch.moe/api/v1/random"/>}
        title={hanzi.hanViet}
        description={hanzi.pinyin}
      />
      {
        showMore ? <div>
          <a onClick={clickCollapseButton}>Collapse</a>
          <DescriptionsComponent hanzi={hanzi} />
        </div>
          :
        <a onClick={clickShowMoreButton}>
          Show more
        </a>
      }

    </Card>
  );
};

export default HanziCard;
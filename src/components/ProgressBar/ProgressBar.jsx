import { Progress } from 'antd';

export const ProgressBar = (props) => (
  <>
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={props.percent}
    />
  
  </>
);
 export default ProgressBar;
import { Progress } from 'antd';

export const ProgressBar = () => (
  <>
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={10}
    />
  
  </>
);
 export default ProgressBar;
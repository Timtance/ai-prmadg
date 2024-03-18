import { useEffect } from 'react';
import { ipcRenderer } from 'electron'
import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  useEffect(() => {
    const fetchData = async () => {
      // 发送消息给 Electron 主进程
      const response = await ipcRenderer.invoke('cFunction')
      console.log(response) // 在控制台输出来自C++框架的返回值
    }
    fetchData()
  }, [])
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}

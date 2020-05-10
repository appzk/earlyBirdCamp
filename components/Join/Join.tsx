import { useCookie } from 'react-use';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import { MEMBER_COUNT_LIMIT } from '../../constants/constants';

async function jsonFetch(url: string) {
  return await fetch(url).then((res) => res.json());
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default () => {
  const [userInfo] = useCookie('gh_user_info');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  if (!userInfo) {
    return null;
  }

  return (
    <div>
      <h2>JOIN</h2>
      <div>{status}</div>
      {loading || status === '加入成功' ? null : (
        <button className="btn btn-blue btn-blue-hover" onClick={joinHandler}>
          加入
        </button>
      )}
      {status === '加入成功' ? (
        <ul>
          <li>
            访问{' '}
            <a
              target="_blank"
              href="https://github.com/orgs/earlyBirdCamp/invitation"
            >
              orgs/earlyBirdCamp/invitation
            </a>{' '}
            接受邀请。
          </li>
          <li>扫码添加 UmiJS 小助手回复 earlyBirdCamp 加群。</li>
          <li>
            <img
              src="https://img.alicdn.com/tfs/TB1pd1ce8r0gK0jSZFnXXbRRXXa-430-430.jpg"
              width="60"
            />
          </li>
        </ul>
      ) : null}
    </div>
  );
};
import React, { useCallback, useState } from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import {Form, Input, Checkbox, Button} from 'antd'
import styled from 'styled-components'
import useInput from '../hooks/useInput'

const ErrorMessage = styled.div`
  color: red;
`

const signup = () => {

  const [id, onChangeId] = useInput()
  const [password, onChangePassword] = useInput()
  const [nickname, onChangeNickName] = useInput()
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e) => {
      setPasswordCheck(e.target.value)
      setPasswordError(e.target.value !== password);
  }, [password])


  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false)
  }, [])

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    if (!term) {
      return setTermError(true)
    }
    console.log(id, nickname, password)
  }, [password, passwordCheck, term])

  return (
    <AppLayout>
          <Head>
              <meta charSet='utf-8' />
              <title>회원가입 | NodeBird</title>
          </Head>
          <Form onFinish={onSubmit}>
            <div>
              <lebel htmlFor="user-id">아이디</lebel>
              <br />
              <Input name="user-id" value={id} required onChange={onChangeId} />
            </div>

            <div>
              <lebel htmlFor="user-nick">닉네임</lebel>
              <br />
              <Input name="user-nick" value={nickname} required onChange={onChangeNickName} />
            </div>

            <div>
              <lebel htmlFor="user-password">비밀번호</lebel>
              <br />
              <Input type="password" name="user-password" value={password} required onChange={onChangePassword} />
            </div>

            <div>
              <lebel htmlFor="user-password-check">비밀번호체크</lebel>
              <br />
              <Input type="password" name="user-password" value={passwordCheck} required onChange={onChangePasswordCheck} />
              {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>}
            </div>
            <div>
              <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>이본훈 말을 잘 들을 것을 동의합니다.</Checkbox>
              {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </div>
            <div style={{marginTop: 10}}>
              <Button type="primary" htmlType='submit'>제출</Button>
            </div>
          </Form>
    </AppLayout>
  )
}

export default signup
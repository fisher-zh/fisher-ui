import MessageBox from '../../../packages/message-box/src/main.js'

describe('MessageBox', () => {
  it('create and close', done => {
    MessageBox({
      title: '消息',
      msg: '这是一段内容'
    })
    setTimeout(() => {
      const msgbox = document.querySelector('.mbui-message-box__wrapper')
      expect(msgbox.__vue__.$parent.visible).to.true
      expect(msgbox.querySelector('.mbui-message-box__title').textContent).to.equal('消息')
      expect(msgbox.querySelector('.mbui-message-box__message').textContent).to.equal('这是一段内容')
      MessageBox.doClose('close')
      expect(msgbox.__vue__.$parent.visible).to.false
      done()
    }, 3000)
  })
})

import MessageBox from '../../../packages/message-box/src/main.js'

describe('MessageBox', () => {
  it('create and close', done => {
    MessageBox({
      title: '消息',
      msg: '这是一段内容',
      confirmText: 'confirm',
      cancelText: 'cancel'
    })
    setTimeout(() => {
      const msgbox = document.querySelector('.mbui-message-box__wrapper')
      // console.log(msgbox.__vue__.visible)
      const visible = msgbox.__vue__.visible
      expect(visible).to.equal(true)
      expect(msgbox.querySelector('.mbui-message-box__title').textContent).to.equal('消息')
      expect(msgbox.querySelector('.mbui-message-box__msg').textContent).to.equal('这是一段内容')
      console.log(msgbox.querySelector('.mbui-message-box__btns').children)
      expect(msgbox.querySelector('.mbui-message-box__btns').children[1].textContent).to.equal('confirm')
      expect(msgbox.querySelector('.mbui-message-box__btns').children[0].textContent).to.equal('cancel')
      // console.log(MessageBox.doClose('close'))
      msgbox.__vue__.doClose('close')
      expect(msgbox.__vue__.visible).to.equal(false)
      done()
    }, 300)
  })
})

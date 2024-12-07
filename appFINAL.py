from flask import Flask
#小寫是libarary   大寫是物件
from flask import render_template
#要跳轉畫面(html)要用此
from flask import redirect
#重新導向某網站
from flask import request
from datetime import datetime

app=Flask(__name__)
#初始化一個物件叫app
@app.route('/')
#當有人進到網站時要做的動作 '/'   
#進到ip後的首頁   沒指定html時要回應的funtintion-->hello world()
def inital():
    return render_template("homepage.html")


#接收form action的路由
@app.route('/submit',methods=["POST"])
def post_info():
    email = request.form.get('email')
    identity = request.form.get('identity')
    response = request.form.get('response')
    satisfaction = request.form.get('satisfaction')
    
    return render_template('respones.html', email=email, identity=identity, response=response, satisfaction=satisfaction)


""" 
增加導航選項或導航欄：

如果頁面內容很多，考慮添加一個固定的導航欄，使用戶能快速跳到不同的部分，例如「個人履歷」、「工作經歷」等。
表單欄位優化：

對於「想說的話」部分，可以考慮增加字數限制提示，或提供簡短提示來指引用戶輸入意見。
如果有需要，為 e-mail 欄位加上正則驗證（如檢查輸入的電子郵件格式）。
動態反饋結果顯示：

在提交表單後，顯示用戶的反饋結果或成功提交訊息，並且可能提供一些後續步驟（例如返回首頁、查看反饋歷史等）。
加入進度條或載入動畫：

在提交表單時加入一個進度條或載入動畫，提升用戶體驗，尤其是表單提交較為耗時的情況。
視覺效果增強：

為滑動條和按鈕添加一些過渡效果，使其更具交互性。
進一步美化表單的背景或邊框設計，例如使用圓角邊框，或添加陰影效果，使表單更加引人注目。
頁面底部增加社交媒體或聯繫方式：

增加一些聯繫方式或社交媒體連結，讓用戶更容易聯絡到你或了解更多關於你的資訊。
響應式設計：

確保網頁在各種設備（手機、平板等）上能夠自適應顯示，提供更好的用戶體驗。
多語言選項：

如果有國際用戶，提供多語言切換功能，方便來自不同地區的用戶訪問。 """


if __name__ == '__main__':
    app.run()



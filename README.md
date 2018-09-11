订单状态：待派单 无人受理 已接单 待上货 待发货 送货中 已送达 已取消 已拒绝 待返回 返回中 返回送达 已关闭

1待派单：下完订单未分配；[created][无，系统派单]
2无人受理：附近无司机，订单分配失败；[timeout][删除]
3已接单：已分配订单，正在取货中；[got][取消]
4待上货：司机已到达，开始等待上货计时；[arrived][]
#待发货：上货完毕，计时结束，准备发货；[picked][X]
5送货中：开始发货；[sent]
6已送达：已经送达并且顾客已经确认收货；[finished]
7已取消：顾客在计时开始之前可以取消订单；[canceled]
8已拒绝：司机在接收系统分配订单后拒绝；[rejected]
9待返回：收货人拒签，或者找不到人，司机申请返回给发货人；[back]
10返回中：发货人接受返回申请，司机开始返回送货；[backing]
11返回送达：司机返回送达给发货人；[backed]
12已关闭：货物无法处理，订单异常情况下的关闭；[blocked]
13已删除：顾客删除订单

顾客端状态组合：
全部：all
取货中：已接单，待上货，待发货
送货中：送货中，待返回，返回中
已结束：无人受理，已取消，已拒绝，已关闭，已送达，返回送达

司机对应操作：
取货中：转至大厅，拒绝订单，开始送货，等待计时
#计时中：开始送货，故障帮助
送货中：完成送货，申请送回
送回中：完成送回，故障帮助
已完成：
顾客对应操作：
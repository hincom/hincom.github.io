// ==UserScript==
// @name         系统答题
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       hincom
// @match        https://px.hebnx.com/*
// @match        http://hincom.eu.cc/*
// @match        https://hincom.github.io/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAALfElEQVRYhX2Xe3Bd1XXGf3vvc859X+nq6nUlW5Yly7JlI2xsYzAwtnk4ATpAxkNTHm0mnaTT/gHTTvrIBDLTpp1JUoZppqHQls5AKTR2INOWJJQSXF4x2BhsJCRZ8kuWZckPSVf3/Trn7N3RVTFpQrNn1l97n7O/vda31reWMKMPcmUJA9U8vrwHGdqCHn4HPzePaIxhVSoYbYRXrn7BeMVbCUduF6kVUXHwvQP+6amDaqDnoIompmQytaBnTmB8H5lowrjgFss48SBeI/hUEEZeudLi1ywhJEIJdL6Q8rzal/1a5SGC4XZrYBvWwEZobMdLdH6RH+z/Io1taEeh52fe8tOZbysl/ouWFvANYP7fSz4DgAEBBIL4xiS8ubmnVcTZK68aRK29Dtm8dgnZJydRW+/E2nrnp19nz+7U77+60zt0qMz07J/KxuQTwrIw4rMBCDP6wC+FIIcO34eudDdXf/7jD52Opi772lugY3AZr++hp06gz48j+waRqTWYmVHcS+chEMFeuw1hBzBzY7g/fQE9fmqBYPzBQKrpVa/R4OkCAnXlSvXnX9sIllk220BE4Z8OdHoj54YCK6Od1i2/iUmuRyDRk6NUn3+M0pv/hnf0AE40jEjEqP3oe6Rf/CGOWUTNjFKby2MP7EBtugURFWFxfOhB4+o4yfhrGAdZsxHaqZt6dNce9KXYFSPfGWS68JFqTXSqO7+MCaTqETGTwxSeeoRCOoPT2YUIhFC2jbQF/uwUatU6rPbVUM5T+OfHUO3dWKv6kSsGUIOD6PEPr+fswnanpecFZYVQhFAyjPS9Tj4xw2rcU+pJApEutWsvRjaBW8NUShilkE1JIqlUPfi6VMLNFTBVr+7KYKqJ8uEjlM+dJrR5K0L7eB+9hTd2CFrWYt33h0jH3O5Nj37TBGtgZUBkUN/6q4dQ7UmsnlW450//gU5PPRq460uQXAu+j//i99A/+UdUMoXqbMNkz2OnUkixlF4u9spe/HMTULyEaA7jXkoT2fEbQIXi838DJ4cRDXHkEjc2b0MPHdptZubGpBUbM0UfKQpBRDmKWRSD3tTMk87gddA2WGe4+dkzMD0CyQ5qP/4XVDCAvfkaLMvHamzEClpQzGDF46iuJOH1CaKr2tDZRfzhQ0Ru24NYsYrCM4/jDb+FiHdi3XU/0s3vr7WsGKxcfyPSy+bxi0UqJ8f/IriiE2vrnuWsLefQk8NoO4AMBBB9/XjDI6hQCjdTxq9WCaQ6ULaDFrIeKr3oIlv70Olz2K1xlAVaSUQojD786nKi9e5A3LBHMHn0W+LUUaS1FI9q+iZZWLhHdq/FxFbWSSfsIDIQwVw4g/GK2OuuhloNMzaCaF+DNBJtQfX8LFYigElX0OkQtZKHVy3jqwDlqWncCzPI3nU4t+2FWrH+OLHzHpRl3109memTOhqDi9NfkefHEKvWLTO+VKD68Qf4G27CueFWhJ/Df+0lVFcXJOJYnobm1ZjsJUxuFjyDjK/GNK2gND4ESuDPXcCOSaI7thPqX0ft8OtUn/oTKOQgkET39KJU4RbpZXOtNRW717p+FyRSdYT+v36H4u/fQXbfc3iRDkT3FsTGjWAWEU0OZKfAU9CyEdXVD2lQPduplmo4jkBEbMzK1VgDu5EVTe3gm1RHx6Bcxpz6YLkEO0lMYeFGi6z7eVMqhkT/ZrCb0LNT+NMTRH/nt/BLRdy3X8Nv68Lu6cZEHURjE6K3hirYeLRhDWyA4jxzH40RXJwkeuM29MpN+JcziEsz+Avz6GgcW1pYbUlEQCyHwYpSyxS7rGo+v8man4ZMATrAHf+QSt7FTkWR4QbsjlbIX8IMH0VuuAqj4piGAbhmEPPzI/injnNxMUPuwOtseOIxKKTJ7/8BTBxDdXcjO9sJdTeg01VqH4wg3CDB9bshHMKORbGolVOmeRW09dVdUxkbp3ruNM7GXnS1hK5OYSoSbBDZBcxCBtF3DcUzk6hkhGA0RmtHKx1rOkE04lbzWC1tqMRt1CZHUafPIs8H6/JsNTcgN+9YFq1qgbBUFUvnK9qrVghXCvWN8MBmivueJDtylqaeBKWJaXR4JZEtNyBWrkGt6AJboCZO4J49Rc64xGIhcgtZgm6egKhgtUQQto17WeHOLqCNj5Vowbr7q4j+Lcs1JhhEphcXLTebd0jPwpkx6Lwa++bbCR95ALecp5a6BrvrJoLdHajmMOTnKb3+BrVMntjARpzeFbz8jcfpa22gGm+kMJlm95Zu9M9+iI5G0G3d6EgIUSnjzs/gv/Icgd6rqcvz0IeYWnXc8pEtYnEe8gtXNL7xz74LehHSE3DqNP7EIdx3p5DSh7JNJePiBE/gN3Uz8NWHae5sRJYXqKQvU+raQPg7L6L3/QNMHcfp6EREGjC5LDp9GaOs5VQ/NQI93YctOxFPlwniDh/C3n47JHvrQPTBl3DHjiIDQUQ4jGhOYcqaQFuE0Nl53OnLRHfsZV33KsTxd6GlHeaP477zMl5uAWv7dkyLg6kZREsb+vgCcvPOuoaYuWNQWERs3jAuQ6nooXK6TH566cXnrjQK7uwFaoseWA3oJf2WEhEJUjm/gMgXCfdvQlFFv/R3uCND6FIRv7MfMnOIiaPoI/8NEb2kWAhfoLbdjLr2jmUv/8f+pVbkHRGNnZHum2/udxxtCn4j/vgEIjNTD4O9upfIprUYoxBKo9Z14jumTq7YYD9WayvuR++hs1lkshmha4iuNeDYiIAFMoCevIi+cJHaa29gmvsRTUn0R29g9u1D7bxxv+jrRnpD56cCkdjfV9NzpA+8A5VlLojWAczlGVTAYKXimIU8MlsjtKEXgiF0aRGdm8cEYnXm+O+/gdAGuWsP3shhTHoOEYqCCEF2DsrF5f+e/xiikUldrT6l3z+GevSaTahaZdRY6uFqxRXR1sRyzU/21Gu6OTOMfzmPd6kI8TgiX8B4imouj1QCKmVUNITJ59AnR1F77kH4ZaRnQFroMyeRW3egdt6DwIX391Gshv+4LK2jtcuLqK9t7ALjZXzH1uVM/mb/7BTRnjZEex+idQ2EAnjjR/BdF1PIoV2Bae/F/fh9dL5IYE0XUmpMNo+ev4AINSJWb0UPHa63Z7SvRN3/CHJpFHj2G4iZzAuBbTu+GWpIEGxrQ/3RnlvxG5M4kYa3Lc2u4uyFblnIE+xfAbF2RMtqZGsn/uTYUgHH+dz9eFMnqYx8gO+CEwkjhcDPF/DLHurSaeTm3RiWMsDHeuDrSFvBv3+bi08+N1Vwuj/vZWtu+dwclZlFrESoeZmZysJXoTsCjnVk8dDQBuN+n8RDD9fbcdG7leBX1iOkQjhBOHmQfKGAHW3CS6fR+QClmYuYMyPY265DtPVgtfctiw4V/GcfYfGNQzj3/u4DqlormUoZEQwuc0I//eSnY4G0wPJjmdGhw+mh0fWxNZ0037cXccPd1MXgk+GjNE/tR3+Le+YEyg5TnT6LXlwgcu1u7C99HZlsv3K2+vjvkTs2RvDe3747tm7Dy1SKvzSYPP/MLwxFAkIKEzEye2zswOXX395lJyK0fOFzRHfuglQfqPin59Nn0RNDuJk09vprkd0brmx5H7xCbfgQbrZ83OkfvN1pj0+ZmkBYNhjzCwCeffr/AsBDJyU6kqBwbPzRuTcP/GXV82lYlaJpfQ+BjVdhXX0tNKTAjvzKqKXPTeC++1NKY0c9kVz1SGzb9X8tjIdfzSFCDfUw/noA0scPuxBrwcvmmH3rQIvMm3/y0XdJS4JfIpiIUG9g+wcg6KDnZpGZNDQ0Ii5cSAtlPRHYct13axWvJNwadiiAli4iEP8VAJ89HQtR129TLiG1nos0Nt8dSOi12qi9lRq3utVqT/lirql24hW3vLBQi3d3XUqu73+PZOonBNR/WnbYSMeGTO5/Xf6ZtwDwPwtFRezQVs+sAAAAAElFTkSuQmCC
// @grant        none
// ==/UserScript==
//提取题目和答案，格式要求如下：题目与答案使用|+|分割并放在同一行，每行结尾有|br|分割符，并且答案直接显示而无需选项。对于多选题答案用|分隔。

(function() {
    const Answers = `
1、信通卡副卡申请人年龄必须在（ ）岁以上。|+|16岁|br|
2、中国人民银行属于（）银行。|+|中央|br|
3、第五套人民币采用无色荧光油墨印刷的面额数字可供机读，该图案印制在（)。|+|钞票正面行名下方|br|
4、会计核算中产生权责发生制和收付实现制两种记账基础的前提是（)。|+|会计分期|br|
5、商业银行各业务条线和分支机构的（）应对本条线和本机构经营活动的合规性负首要责任。|+|负责人|br|
6、某企业2014年6月初资产总额为500万元，6月发生以下经济业务：向银行借款50万元，归还80万元的欠款，购买40万元的原材料。假定不考虑其他因素，6月30日，该企业资产总额为（)。|+|470万元|br|
7、风险识别的环节包括（)。|+|感知风险和分析风险|br|
8、根据巴尼的观点，组织中的人力资源之所以能够成为企业优势资源，是因为（)。|+|高能力的劳动者是稀有资源|br|
9、下列关于防范质押操作风险的说法中，错误的是（)。|+|银行借出质押证件时，应书面通知登记部门或托管方撤销质押|br|
10、监察机关调查（）等职务犯罪，根据需要，经过严格的批准手续，可以采取技术调查措施。|+|涉嫌重大贪污贿赂|br|
11、我国单位银行结算账户按用途分为基本存款账户、一般存款账户、(）和临时存款账户。|+|专用存款账户|br|
12、登记账簿的依据是（)。|+|审核无误的会计凭证|br|
13、下列（）不属于一般性政策工具。|+|信用控制|br|
14、国际金融协会针对风险偏好的传导提出四点意见，下列关于此意见描述错误的是（)。|+|机构应加强关于风险偏好框架的内部交流与培训，各级管理层必须亲自参加|br|
15、下列不是健康风险文化的内容。|+|树立正确的贷款经营方式|br|
16、关于核心存款的说法中，错误的是（)。|+|核心存款比例越高意味着商业银行的流动性较差|br|
17、有利于合规风险管理的基本制度不包括（)。|+|合规预警机制|br|
18、企业编制现金流量表的作用在于（)。|+|提供企业一定会计期间内现金和现金等价物流入和流出的信息|br|
19、会计监督分为（)。|+|内部监督和外部监督|br|
20、存货盘盈核查后应（)。|+|冲减管理费用|br|
21、企业2014年2月发生以下经济业务：①本月预付全年水电费3600元：②本月购入办公用品2000元，款项尚未支付；③计提本月短期借款利息5000元。按照权责发生制，该企业本月应确认费用（）元。|+|7300|br|
22、下列不属于商业银行合规风险管理目标的是（)。|+|使银行的收益最大化|br|
23、定期存款、通知存款、协议存款和保证金存款类账户对账单的收回率必须达到（)。|+|100%|br|
24、各国中央银行最常用的货币政策工具是（)。|+|公开市场操作|br|
25、问责对象是各级党委（党组）、党的工作部门及其领导成员，各级纪委（纪检组）及其领导成员，重点是（)。|+|主要负责人|br|
26、纪律处分、经济处理或其他处理，必须由当事人或责任人所属法人机构履行完整法律程序并以（）名义作出处理决定。|+|法人机构|br|
27、信贷业务调查应以（）为主，间接调查为辅。|+|实地调查|br|
28、关于商业助学贷款的手续，下列说法中错误的是（)。|+|如果借款申请人提交材料不完整，贷款受理人可直接拒绝申请|br|
29、下列选项中，不仅是操作风险计量的一种方法，更是一套完整的操作风险管理框架的计量方法是（)。|+|高级计量法|br|
30、个人贷款保证人年龄应年满（）周岁，具有完全民事行为能力的自然人，且借款人年龄与贷款期限之和不得超过（)年。|+|18，60|br|
1、《河北省农村信用社公务用车管理指导意见》规定公务用车实行（）规定。|+|节假日期间封存停驶制度|执行恶劣天气限行规定|回单位停放|br|
2、公司信贷客户按所有者性质和组织形式细分为（)。|+|民营企业|外商独资企业|国有企业|合资和合作经营企业|业主制企业|br|
3、下列关于现值计量的表述中，正确的有（)。|+|在现值计量下，资产按照预计从其持续使用和最终处置中所产生的未来净现金流入量的折现金额计量|在现值计量下，负债按照预计期限内需要偿还的未来净现金流出量的折现金额计量|br|
4、银行业监督管理机构根据审慎监管的要求，可以采取以下哪些措施进行现场检查：()。|+|检查银行业金融机构运用电子计算机管理业务数据的系统|询问银行业金融机构的工作人员，要求其对有关检查事项作出说明|查阅、复制银行业金融机构与检查事项有关的文件、资料，对可能被转移、隐匿或者毁损的文件、资料予以封存|进入银行业金融机构进行检查|br|
5、法律、合规部门主要承担的职责有（)。|+|关注、准确理解法律合规监管要求|开展法律合规培训和教育项目|协助制定法律合规政策|参与商业银行的组织架构和业务流程再造|适时修订规章制度和操作规程，使其符合法律和监管要求|br|
6、员工违规失职行为中所称责任人员，是指对违规失职行为负有责任的农村信用社员工，包括（)。|+|间接责任人|直接责任人|br|
7、以下情况中可能造成账实不符的有（)。|+|财产收发计量或检验不准|管理不善|账簿记录发生差错|未达账项|br|
8、下列有关会计凭证保管的规定中，正确的有（)。|+|会计凭证应定期装订成册，防止散失|会计凭证保管期限未满前不得任意销毁|br|
9、流动性风险的分类包括（)。|+|资产流动性风险|负债流动性风险|br|
10、固定资产处置包括固定资产（）等。|+|捐赠|报废|出售|转让|br|
11、下列关于信用风险的说法，正确的有（)。|+|违约风险既可以针对个人，也可以针对企业|信用风险既对基础金融产品产生影响，又对衍生产品产生影响|信用风险存在于表内外业务以及衍生产品交易中|信用风险通常包括违约风险、结算风险|br|
12、党的纪律主要包括（)、工作纪律、生活纪律。|+|组织纪律|政治纪律|群众纪律|br|
13、确定案件报送主体时需考虑哪些因素？（多选）|+|业务经办机构|涉案人员作案时的身份|br|
14、农村信用社实现的净利润按照提取（）的顺序进行分配。|+|法定盈余公积金|向投资者分配利润|提取一般（风险）准备|br|
15、下列财务报表分析的指标中，反映企业运营能力的有（)。|+|存货周转天数|应收账款周转次数|br|
16、下列项目中，属于原始凭证的有（)。|+|发票|提货单|发出材料汇总表|产品成本计算单|br|
17、职能制组织形式的缺点是（)。|+|适应性差|领导负担重|横向协调差|br|
18、在贷前调查环节中，财务调查分析主要包括（)。|+|资产负债表分析|组合分析|损益表分析|现金流量表分析|br|
19、下列关于风险监管的说法，正确的有（)。|+|必须在实现本外币、表内外、境内外并表监管的基础上，建立对各类风险的识别、监控、分析、预警和处置机制|监管部门关注的风险状况包括行业整体风险状况、区域风险状况和银行机构风险状况|银行监管部门通过现场检查和非现场监测等手段，对银行机构风险状况进行全面评估和监控|银行机构风险状况既包括银行整体并表基础上的总体风险水平，还包括其单一或部分分支机构的风险水平|br|
20、下列部门中，承担商业银行内部控制监督检查职责的部门有（)，应根据分工协调配合，构建覆盖各级机构、各个产品、各个业务流程的监督检查体系。|+|内部审计部门|内控管理职能部门|业务部门|br|
1、客户可以通过手机银行自助追加账户，但其功能服务仅限于业务查询。|+|正确|br|
2、银行内部信贷投向模糊、岗位设置欠缺，流程制约缺失，问责监管不力，人员操守沦丧，信贷操作风险频发。()|+|正确|br|
3、自助设备吞没的银行卡，由自助设备管理员填写《河北省农村信用社吞没卡登记、上交、返还登记簿》，保管10个工作日待客户领取。|+|不正确|br|
4、严禁金融机构将已收缴的假人民币重新流入市场。|+|正确|br|
5、信通借记卡是以人民币结算、实时记账、不可透支的借记卡，具有存取现金、转账结算、消费、理财、查询等功能，以及圈存、圈提、脱机消费等电子现金功能。|+|正确|br|
6、鉴定为假币的，不必在持币人视线范围内加盖"假币"印章，假币实物予以收缴。|+|不正确|br|
7、对于已核销的资产，除依法律法规和本办法规定的权利义务已终结的情形外，农村信用社要履行清收职责，继续尽职追索，全面查找各项关联财产线索，发现有效财产后，要及时进行资产保全；对可恢复执行的中止或终结裁定的，在获取财产线索证据后，及时向法院提请恢复执行。同时，要对已核销资产做好台账记录、立卷归档、专人管理，加强追索维护权益。|+|正确|br|
8、民事行为是公民或者法人设立、变更、终止民事权利和民事义务的合法行为。|+|不正确|br|
9、从卡片读取方式上区分，信通借记卡分为接触式和非接触式。|+|正确|br|
10、依照本办法受到诫勉谈话或通报批评处理的员工，取消当年评先、评优资格。|+|正确|br|
案件管理工作遵循的基本原则不包括以下哪一项？|+|集中统一处理|br|
以下哪项属于重大案件的情形？|+|引发区域性系统性风险|br|
县级法人机构（石家庄审计中心辖内除外）发生案件后，需在知悉后多少个工作日内报送《案件确认报告》？|+|3个工作日|br|
重大案件的追责问责工作由哪一级机构负责？|+|省联社|br|
案发机构需在报送案件报告后多长时间内报送调查报告？|+|6个月|br|
以下哪些情形属于案件风险事件？（多选）|+|从业人员被立案调查但未确定是否与业务相关|机构向公安机关报案但未立案|br|
案发机构在案件处置中需承担哪些职责？（多选）|+|报送案件信息|开展涉案业务调查|对责任人员追责问责|制定整改方案|br|
确定案件报送主体时需考虑哪些因素？（多选）|+|涉案人员作案时的身份|业务经办机构|br|
案件撤销的情形包括哪些？（多选）|+|公安撤案|法院判决无罪|监管部门核查不符合案件定义|br|
案件审结报告需包含哪些内容？（多选）|+|案件基本情况|追责问责结果|整改方案|br|
各级农信机构承担本机构案件风险防控的（）责任。|+|主体|br|
各法人机构（）承担案件风险防控执行责任|+|高级管理层|br|
以下哪个是董（理）事会的主要职责|+|审议本机构年度案件风险防控评估等相关情况报告|br|
各法人机构内设部门和分支机构应对其职责范围内的案件风险防控工作承担（）责任。|+|直接|br|
各级农信机构应在举报处理制度中建立健全（）机制，有效甄别举报中反映的违法违规事项，及时采取措施处置和化解案件风险隐患。|+|案件风险线索发现查处|br|
案件风险防控遵循以下原则：（）|+|预防为主、关口前移|法人主责、分级负责|全面覆盖、突出重点|联防联控、各司其职|br|
各级农信机构在内部监督检查制度中应建立健全监督和检查案件风险防控的相关机制，组织开展相关条线和各级机构案件风险防控内部监督检查，并重点加大对（）的监督检查力度。|+|基层网点|关键岗位|案件易发部位|薄弱环节|br|
各级农信机构应建立健全案件风险防控机制，构建起覆盖案件风险排查与处置、（）追责问责、问题整改、举报处理、考核奖励、培训教育等环节的全链条防控体系。|+|从业人员行为管理|领导干部监督|内部监督检查|br|
各法人机构应不断提高内部控制有效性，持续完善案件风险防控重点措施，确保案件风险整体可控,包括但不限于（）等。|+|股东股权和关联交易管理|分级授权体系和权限管理|重要岗位轮岗和强制休假管理|账户对账和异常交易账户管理|重要印章凭证管理|br|
各法人机构应制定案件风险排查与处置制度，确定案件风险排查的范围、内容、频率等事项，建立健全（）等关键环节的常态化风险排查与处置机制。|+|客户准入|岗位准入|业务处理|决策审批|br|

   `;

    //1.文本预处理函数：统一格式，去除干扰项
    function preprocessText(text) {
        if (!text || typeof text !== 'string') return '';
        return text
            .trim() // 去除首尾空格
        // 1. 去除开头的数字+顿号/小数点（如"1、""3."）
            .replace(/^(\d+[、.])?/, '')
        // 2. 去除A-Z+顿号/小数点（如"A、""B."）
            .replace(/^([A-Z]+[、.])?/, '')
        // 3. 去除"正确答案是"或"答案正确的是"及后面的括号（含括号内内容）
            .replace(/正确答案是\（.*?\）/g, '')
            .replace(/正确答案是\(.*?\)/g, '')
            .replace(/答案正确的是\（.*?\）/g, '')
            .replace(/答案正确的是\(.*?\)/g, '')
        // 4. 中文括号统一转为英文括号
            .replace(/（/g, '(')
            .replace(/）/g, ')')
        // 5. 统一括号内容为占位符（保留括号结构）
            .replace(/\(.*?\)/g, '()')
        // 6. 去除所有空格（包括中间空格）
            .replace(/\s+/g, '')
            .replace(/[：；;]$/, '');
    }

    const questionAnswers = preprocessText(Answers);

    // 2.从questionAnswers中查找对应问题的答案
    function findAnswer(questionText, questionAnswers) {
        // 按换行分割所有题目和答案
        const lines = questionAnswers.split('|br|');
        // 首次遍历查找完整匹配
        for (const line of lines) {
            const [question, answer] = line.split('|+|');
            if (question?.trim().includes(questionText.trim())) {
                return answer ? answer.replace('答案：', '').trim() : null;
            }
        }
        // 未找到时按标点分割问题文本
        const punctuation = /[，。,？?；;：:()（）【】[\]{}、“”‘’]/g;
        const keywords = questionText.trim()
        .split(punctuation)
        .filter(word => word.trim().length > 3); // 过滤空字符串
        // 遍历关键词匹配
        for (const keyword of keywords) {
            for (const line of lines) {
                const [question, answer] = line.split('|+|');
                if (question?.trim().includes(keyword.trim())) {
                    return answer ? answer.replace('答案：', '').trim() : null;
                }
            }
        }
        // 所有匹配失败返回null
        return null;
    }

    // 单选题作答
    function AnswersingleItem() {
        const text = document.getElementById('singleItem').textContent.trim();
        const match = text.match(/共(\d+)道题/);
        const questionCount = match ? parseInt(match[1], 10) : null;

        for (let i = 0; i < questionCount; i++) {
            const id = "one" + i;
            try {
                const rawQuestionText = document.getElementById(id).querySelector('span').textContent.trim();
                const questionText = preprocessText(rawQuestionText);
                const optionLis = document.getElementById(id).querySelectorAll('ul li');
                const answer = findAnswer(questionText, questionAnswers);
                let hasMatch = false;


                optionLis.forEach((li, index) => {
                    const text = preprocessText(li.textContent.trim());
                    if (text === answer) {
                        li.style.backgroundColor = '#FFFF00';
                        li.style.fontWeight = 'bold';
                        hasMatch = true;

                        // 获取选项字母（A/B/C/D）
                        const optionLetter = li.textContent.trim().charAt(0);

                        // 查找对应的radio按钮并点击
                        const radioButtons = document.getElementById(id).querySelectorAll('input[type="radio"]');
                        radioButtons.forEach(radio => {
                            if (radio.nextSibling &&
                                radio.nextSibling.textContent.trim() === optionLetter + "选项") {
                                radio.click();
                                //console.log(`已选择问题${i+1}的选项: ${optionLetter}`);
                            }
                        });
                    }
                });

                if (!hasMatch) {
                    console.log(`单选${i+1}题答案: ${answer}`);
                }
            } catch (error) {
                console.error(`处理问题${i+1}时出错:`, error);
            }
        }
    }

    // 多选题作答
    function AnswermultiItem() {
        const text = document.getElementById('multiItem').textContent.trim();
        const match = text.match(/共(\d+)道题/);
        const questionCount = match ? parseInt(match[1], 10) : null;

        for (let i = 0; i < questionCount; i++) {
            const id = "two" + i;
            try {
                const rawQuestionText = document.getElementById(id).querySelector('span').textContent.trim();
                const questionText = preprocessText(rawQuestionText);
                const optionLis = document.getElementById(id).querySelectorAll('ul li');
                const answer = findAnswer(questionText, questionAnswers);
                let hasMatch = false;

                if (answer) {
                    const targetAnswers = answer.split('|');

                    // 过滤出实际选项（排除包含checkbox的行）
                    const actualOptions = Array.from(optionLis).filter(li =>
                                                                       li.textContent.trim().match(/^[A-Z]、/) &&
                                                                       !li.querySelector('input[type="checkbox"]')
                                                                      );

                    actualOptions.forEach(li => {
                        const text = preprocessText(li.textContent.trim());
                        if (targetAnswers.some(a => a.trim() === text)) {
                            li.style.backgroundColor = '#FFFF00';
                            li.style.fontWeight = 'bold';
                            hasMatch = true;

                            const optionLetter = li.textContent.trim().charAt(0);
                            const checkboxes = document.querySelectorAll(`input[name="multiOption${i}"][type="checkbox"]`);

                            checkboxes.forEach(checkbox => {
                                if (checkbox.nextSibling &&
                                    checkbox.nextSibling.textContent.trim() === `${optionLetter}选项`) {
                                    //checkbox.checked = true;
                                    //必须使用两次click()
                                    checkbox.click();
                                    checkbox.click();
                                    //console.log(`已勾选问题${i+1}的正确选项: ${optionLetter}`);
                                }

                            });

                        }
                    });
                }

                if (!hasMatch) {
                    console.log(`多选${i+1}题答案: ${answer}`);
                }
            } catch (error) {
                console.error(`处理问题${i+1}时出错:`, error);
            }
        }
    }

    // 判断题作答
    function AnswerjudgeItem() {
        const text = document.getElementById('judgeItem').textContent.trim();
        const match = text.match(/共(\d+)道题/);
        const questionCount = match ? parseInt(match[1], 10) : null;

        for (let i = 0; i < questionCount; i++) {
            const id = "three" + i;
            try {
                const questionElement = document.getElementById(id).querySelector('span');
                const rawQuestionText = questionElement.textContent.trim();
                const questionText = preprocessText(rawQuestionText);
                const answer = findAnswer(questionText, questionAnswers);

                // 检查答案是否存在
                if (answer === null) {
                    console.log(`判断题${i+1}未找到答案`);
                    continue;
                }

                // 根据答案结果修改题目颜色并选择答案
                if (answer === "正确") {
                    questionElement.style.color = "#008000"; // 绿色
                    document.querySelector(`#${id} input[value="Y"]`).click();
                    //console.log(`问题${i+1}已选择"正确"`);
                } else if (answer === "不正确") {
                    questionElement.style.color = "#FF0000"; // 红色
                    document.querySelector(`#${id} input[value="N"]`).click();
                    //console.log(`问题${i+1}已选择"错误"`);
                } else {
                    console.log(`判断题${i+1}答案格式不正确: ${answer}`);
                }
            } catch (error) {
                console.error(`处理问题${i+1}时出错:`, error);
            }
        }
    }
    function ceshi(qusi)
    {
        const rawQuestionText = document.getElementById(qusi).querySelector('span').textContent.trim();
        const questionText = preprocessText(rawQuestionText);
        const answer = findAnswer(questionText, questionAnswers);
        //obj.innerHTML=answer+ "<br/>"+ obj.innerHTML;
        console.log(questionText);

        console.log('匹配到的答案：', answer);


        const optionLis = document.getElementById(qusi).querySelectorAll('ul li');

        optionLis.forEach(li => {
            const text = preprocessText(li.textContent.trim());
            if (text=== answer) {
                li.style.backgroundColor = '#FFFF00'; // 黄色背景
                li.style.fontWeight = 'bold'; // 加粗字体
            }
        });

    }

    //  ceshi("one1")
    AnswersingleItem()
    AnswermultiItem()
    AnswerjudgeItem()


})();

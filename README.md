# trustnote-explorer
View the DAG and all public transactions
style: [
			{
				selector: 'node',//不在主链上 not in main chain
				style: {
					// 'content': 'data(unit_s)',
					'text-opacity': 1,
					'min-zoomed-font-size': 13,
					'text-valign': 'bottom',
					'text-halign': 'center',
					'font-size': '13px',
					'text-margin-y': '5px',
					'background-color': '#E0F8F5',
					'border-width': 1,
					'border-color': '#209285',
					'shape': 'circle',
					// 'border-color': '#333',
					//	'border-style': 'dotted',
					'width': 30,
					// 'height': 25
				}
			},
			{
				selector: 'node.hover',//node hover 显示地址的样式
				style: {
					'content': 'data(id)',
					'text-opacity': 1,
					'font-weight': 'bold',
					'font-size': '14px',
					'text-background-color': '#72CBC1',
					'text-background-opacity': 1,
					'text-background-shape': 'rectangle',
					'text-border-opacity': 1,
					'text-border-width': 1,
					'text-border-color': '#209285',
					'z-index': 9999,
					'opacity':0.7
				}
			},
			{
				selector: 'edge',//箭头
				style: {
					'width': 2,
					'target-arrow-shape': 'triangle',
					'line-color': '#72CBC1',
					'target-arrow-color': '#72CBC1',
					'curve-style': 'bezier'
				}
			},
			{
				selector: '.best_parent_unit',//指向最优父节点
				style: {
					'width': 4,
					'target-arrow-shape': 'triangle',
					'line-color': '#72CBC1',
					'target-arrow-color': '#72CBC1',
					'curve-style': 'bezier'
				}
			},
			{
				selector: '.is_on_main_chain',//在主链上
				style: {
					//	'border-width': 4,
					//	'border-style': 'solid',
					//	'border-color': '#2980b9'
					// 	'border-color': '#333'
					'background-color': '#72CBC1'
				}
			},
			{
				selector: '.is_stable',
				style: {
					//	'background-color': '#2980b9'
					'border-width': 4,
					'border-style': 'solid',
					'border-color': '#209285',
					//	'background-color': '#9cc0da'
				}
			},
			{
				selector: '.active',
				style: {
					'background-color': '#54A69D',
					'border-color': '#17675E',
					'border-width': '4'
				}
			},
			{
				selector: '.finalBad',
				style: {
					'background-color': 'F6A665'
				}
			},
			{
				selector: '.tempBad',
				style: {
					'background-color': '#F6A665',
					'border-color': '#B67046',
				}
			}
		],
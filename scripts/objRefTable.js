const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.TextBox,
		C3.Plugins.Keyboard,
		C3.Behaviors.TileMovement,
		C3.Behaviors.solid,
		C3.Plugins.Touch,
		C3.Plugins.NinePatch,
		C3.Behaviors.Tween,
		C3.Plugins.Arr,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Arr.Acts.Clear,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.TileMovement.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Arr.Cnds.CompareX,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.SaveState,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.TextBox.Acts.SetPlaceholder,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.LoadState
	];
};
self.C3_JsPropNameTable = [
	{確認: 0},
	{背景: 0},
	{題目: 0},
	{文字输入: 0},
	{Keyboard: 0},
	{地圖: 0},
	{Sprite2: 0},
	{网格移动: 0},
	{实体: 0},
	{Sprite3: 0},
	{方向: 0},
	{Touch: 0},
	{"9patch": 0},
	{編號: 0},
	{問號: 0},
	{补间动画: 0},
	{Sprite: 0},
	{圖片: 0},
	{殿明: 0},
	{問題: 0},
	{Sprite4: 0},
	{六個地方: 0},
	{Text: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{重玩: 0},
	{音频: 0},
	{相片編號: 0},
	{在哪裡: 0},
	{能否移動: 0},
	{重頭: 0}
];

self.InstanceType = {
	確認: class extends self.ISpriteInstance {},
	背景: class extends self.ISpriteInstance {},
	題目: class extends self.ISpriteInstance {},
	文字输入: class extends self.ITextInputInstance {},
	Keyboard: class extends self.IInstance {},
	地圖: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	方向: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	_9patch: class extends self.IWorldInstance {},
	問號: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	圖片: class extends self.ISpriteInstance {},
	殿明: class extends self.ISpriteInstance {},
	問題: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	六個地方: class extends self.IArrayInstance {},
	Text: class extends self.ITextInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	重玩: class extends self.ISpriteInstance {},
	音频: class extends self.IInstance {}
}
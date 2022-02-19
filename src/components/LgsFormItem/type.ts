import { NormalOption } from '../../types/global'
import { ILgsTableConfig } from '../LgsFormTable/type'

export interface ILgsFormItemBase {
  type: string
  field: string
  label?: string
  hidden?: boolean
  style?: string
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  onChange?: (...args: any[]) => void
}

interface ILgsFormInput extends ILgsFormItemBase {
  type: 'input',
  onKeyUp?: (...args: any[]) => void
}
interface ILgsFormText extends ILgsFormItemBase {
  type: 'text'
}
interface ILgsFormPassword extends ILgsFormItemBase {
  type: 'password'
}
interface ILgsFormTextArea extends ILgsFormItemBase {
  type: 'textarea'
  minRow?: number
  maxRow?: number
}
interface ILgsFormNumber extends ILgsFormItemBase {
  type: 'number'
  min?: number
  max?: number
  controlPosition?: 'right'
}
interface ILgsFormSelect extends ILgsFormItemBase {
  type: 'select'
  multiple?: boolean
  allowCreate?: boolean
  options?: NormalOption[]
  remote?: boolean
  remoteMethod?: (val: any) => NormalOption[]
}
interface ILgsFormCascader extends ILgsFormItemBase {
  type: 'cascader'
  checkStrictly?: boolean
  multiple?: boolean
  options?: NormalOption[]
}
interface ILgsFormCheckbox extends ILgsFormItemBase {
  type: 'checkbox'
  options?: NormalOption[]
}
interface ILgsFormRadio extends ILgsFormItemBase {
  type: 'radio'
  options?: NormalOption[]
}

interface ILgsFormSwitch extends ILgsFormItemBase {
  type: 'switch'
  options?: NormalOption[]
  activeText?: string
  inactiveText?: string
}
export interface ILgsFormDate extends ILgsFormItemBase {
  type: 'date' | 'datetime'
  min?: string
  max?: string
  format?: string
}
export interface ILgsFormDateRange extends ILgsFormItemBase {
  type: 'daterange' | 'datetimerange'
  min?: string
  max?: string
  format?: string
  rangeSeparator?: string
}
interface ILgsFormTime extends ILgsFormItemBase {
  type: 'time'
  min?: string
  max?: string
  format?: string
  isRange?: boolean
}
interface ILgsFormEditor extends ILgsFormItemBase {
  type: 'editor'
}
interface ILgsFormUploader extends ILgsFormItemBase {
  type: 'uploader'
  desc?: string
  multiple?: boolean
  maxFile?: number
  maxSize?: number
  autoUpload?: boolean
  fileTypes?: string[]
  downLoad?: boolean
  uploadBefore?: (...args: any[]) => void
  uploadAfter?: (...args: any[]) => void
  removeBefore?: (...args: any[]) => void
  fileClick?: (...args: any[]) => void
}
export interface ILgsFormTable extends ILgsFormItemBase{
  type: 'table',
  config: ILgsTableConfig
  rowKey?: string
  treeProp?: {
    children: string
    hasChildren: string
  }
}
export type ILgsFormItem = ILgsFormSelect |
  ILgsFormInput |
  ILgsFormText |
  ILgsFormPassword |
  ILgsFormTextArea |
  ILgsFormNumber |
  ILgsFormEditor |
  ILgsFormUploader |
  ILgsFormCascader |
  ILgsFormCheckbox |
  ILgsFormRadio |
  ILgsFormSwitch |
  ILgsFormDate |
  ILgsFormDateRange |
  ILgsFormTime |
  ILgsFormTable

export type IBtnType = '' | 'default' | 'text' | 'success' | 'warning' | 'info' | 'primary' | 'danger'
export type ILgsFormBtn = {
  text: string
  disabled?: boolean
  icon?: string
  click?: (...args: any[]) => void
  style?: string
  type?: IBtnType
  class?: string
}
import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  UserOutline,
  OrderedListOutline,
  FolderOpenOutline,
  SettingOutline,
  LogoutOutline,
  LoginOutline,
  UploadOutline,
  ArrowLeftOutline,
  FundProjectionScreenOutline,
  LockOutline,
  EditOutline,
  DeleteOutline,
  UserAddOutline,
  PieChartOutline,
  SnippetsOutline,
  FundOutline,
  ArrowRightOutline
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, UserOutline, OrderedListOutline, FolderOpenOutline, SettingOutline, LogoutOutline, LoginOutline, ArrowLeftOutline, LockOutline,FundProjectionScreenOutline, EditOutline, DeleteOutline, UserAddOutline,PieChartOutline, SnippetsOutline, FundOutline, ArrowRightOutline];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}

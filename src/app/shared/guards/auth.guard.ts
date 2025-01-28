import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  canActivate(): boolean {
    // Retourne toujours "true" pour permettre l'accès
    return true;
  }
}
